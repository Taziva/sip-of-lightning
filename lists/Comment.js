const { Text, Relationship, DateTime } = require("@keystonejs/fields");
const {
  AuthedRelationship
} = require("@keystonejs/fields-authed-relationship");

const userIsAdmin = ({ authentication: { item: user } }) =>
  Boolean(user && user.isAdmin);

module.exports = {
  fields: {
    body: { type: Text, isMultiline: true },
    originalPost: {
      type: Relationship,
      ref: "Post"
    },
    author: {
      type: AuthedRelationship,
      ref: "User",
      isRequired: true,
      access: {
        create: userIsAdmin,
        update: userIsAdmin
      }
    },
    posted: { type: DateTime }
  },
  labelResolver: item => item.body
};
