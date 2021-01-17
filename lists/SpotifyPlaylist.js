const { Text } = require("@keystonejs/fields");

module.exports = {
  fields: {
    title: { type: Text, isRequired: true },
    uri: {
      type: Text,
      isRequired: true,
      hooks: {
        afterChange: async ({
          operation,
          existingItem,
          updatedItem,
          context
        }) => {
          if (operation === "create" || existingItem.uri !== updatedItem.uri) {
            console.log("here");
            const uid = updatedItem.uri.split(":")[2];
            const spotifyPlaylist = updatedItem.id;
            const { error, data } = await context.executeGraphQL({
              context: context.createContext({ skipAccessControl: true }),
              query: `
                  mutation Updateuid($spotifyPlaylist: ID!, $uid: String!) {
                      updateSpotifyPlaylist(id: $spotifyPlaylist, data: { uid: $uid }) {
                          id
                      }
                  }
              `,
              variables: { spotifyPlaylist, uid }
            });

            console.log("error", error);
            console.log("data", data);
          }
        }
      }
    },
    uid: {
      type: Text,
      adminConfig: {
        isReadOnly: true
      }
    }
  },
  labelField: "title"
};
