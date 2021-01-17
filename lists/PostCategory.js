const { Text, Slug } = require("@keystonejs/fields");

module.exports = {
  fields: {
    name: { type: Text },
    slug: {
      type: Slug,
      from: "name",
      adminConfig: {
        isReadOnly: true
      }
    }
  }
};
