require("dotenv").config();
const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { NextApp } = require("@keystonejs/app-next");

const UserSchema = require("./lists/User");
const PostSchema = require("./lists/Post");
const CommentSchema = require("./lists/Comment");
const PostCategorySchema = require("./lists/PostCategory");
const DonutSchema = require("./lists/Donut");
const SpotifyPlaylistSchema = require("./lists/SpotifyPlaylist");
const initialiseData = require("./initial-data");

const { PrismaAdapter: Adapter } = require("@keystonejs/adapter-prisma");
const PROJECT_NAME = "A sip of lightning";
const adapterConfig = {
  url: "postgres://keystone5:dev@localhost:5432/keystone"
};

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET,
  onConnect: process.env.CREATE_TABLES !== "true" && initialiseData
});

keystone.createList("User", UserSchema);
keystone.createList("Post", PostSchema);
keystone.createList("Comment", CommentSchema);
keystone.createList("PostCategory", PostCategorySchema);
keystone.createList("Donut", DonutSchema);
keystone.createList("SpotifyPlaylist", SpotifyPlaylistSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
  config: { protectIdentities: process.env.NODE_ENV === "production" }
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy
    }),
    new NextApp({ dir: "app" })
  ]
};
