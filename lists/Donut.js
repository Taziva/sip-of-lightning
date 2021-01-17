const { Text, Select, DateTime, Relationship } = require("@keystonejs/fields");
const { CloudinaryAdapter } = require("@keystonejs/file-adapters");
const { CloudinaryImage } = require("@keystonejs/fields-cloudinary-image");
const { atTracking } = require("@keystonejs/list-plugins");

const { format } = require("date-fns");

const DATE_FORMAT = "d/L/y";

const fileAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: "sip-of-lightning/donuts"
});

module.exports = {
  plugins: [atTracking()],
  fields: {
    title: {
      type: Text,
      defaultValue: `Weekly Donut - ${format(new Date(), DATE_FORMAT)}`,
      isRequired: true
    },
    state: {
      type: Select,
      options: "draft, published, archived",
      defaultValue: "draft",
      isRequired: true,
      hooks: {
        afterChange: async ({ existingItem, updatedItem, context }) => {
          if (
            existingItem.state !== "published" &&
            updatedItem.state === "published"
          ) {
            const publishedAt = new Date().toISOString();
            const weeklyDonut = updatedItem.id;
            await context.executeGraphQL({
              context: context.createContext({ skipAccessControl: true }),
              query: `
                  mutation UpdatePublishedDate($weeklyDonut: ID!, $publishedAt: DateTime!) {
                      updateWeeklyDonut(id: $weeklyDonut, data: { publishedAt: $publishedAt }) {
                          id
                      }
                  }
              `,
              variables: { weeklyDonut, publishedAt }
            });
          }
        }
      }
    },
    publishedAt: {
      type: DateTime,
      adminConfig: {
        isReadOnly: true
      }
    },
    image: {
      type: CloudinaryImage,
      adapter: fileAdapter,
      hooks: {
        beforeChange: async ({ existingItem }) => {
          if (existingItem && existingItem.image) {
            await fileAdapter.delete(existingItem.image);
          }
        }
      }
    },
    spotifyPlaylist: {
      type: Relationship,
      ref: "SpotifyPlaylist"
    }
  },
  hooks: {
    afterDelete: ({ existingItem }) => {
      if (existingItem.image) {
        fileAdapter.delete(existingItem.image);
      }
    }
  }
};
