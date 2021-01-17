const {
  Text,
  Select,
  Relationship,
  DateTime,
  Slug
} = require("@keystonejs/fields");
const {
  AuthedRelationship
} = require("@keystonejs/fields-authed-relationship");
const { CloudinaryAdapter } = require("@keystonejs/file-adapters");
const { CloudinaryImage } = require("@keystonejs/fields-cloudinary-image");
const { Content } = require("@keystonejs/fields-content");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");
const { atTracking, logging } = require("@keystonejs/list-plugins");

const fileAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: "sip-of-lightning/posts"
});

module.exports = {
  plugins: [atTracking(), logging(args => console.log(args))],
  fields: {
    title: { type: Text, isRequired: true },
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
            const post = updatedItem.id;
            await context.executeGraphQL({
              context: context.createContext({ skipAccessControl: true }),
              query: `
                  mutation UpdatePublishedDate($post: ID!, $publishedAt: DateTime!) {
                      updatePost(id: $post, data: { publishedAt: $publishedAt }) {
                          id
                      }
                  }
              `,
              variables: { post, publishedAt }
            });
          }
        }
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
    content: {
      type: Wysiwyg,
      height: 400
    },
    summary: { type: Wysiwyg, height: 150 },
    author: { type: AuthedRelationship, ref: "User", index: true },
    categories: {
      type: Relationship,
      ref: "PostCategory",
      many: true
    },
    publishedAt: {
      type: DateTime,
      adminConfig: {
        isReadOnly: true
      }
    },

    slug: {
      type: Slug,
      isUnique: true,
      adminConfig: {
        isReadOnly: true
      }
    }
  },
  adminConfig: {
    defaultPageSize: 20,
    defaultColumns: "title, status",
    defaultSort: "title"
  },
  hooks: {
    afterDelete: ({ existingItem }) => {
      if (existingItem.image) {
        fileAdapter.delete(existingItem.image);
      }
    }
  },
  labelResolver: item => item.title
};
