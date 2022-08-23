const { ApolloServer } = require('apollo-server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');

// local imports
const connectDB = require('./config/db');
const typeDefs = require('./types');
const resolvers = require('./resolvers');
const models = require('./models');

// connect to mongodb
connectDB();

// create server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },

  //plugins
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      settings: {
        'some.setting': true,
        'general.betaUpdates': false,
        'editor.theme': 'dark',
        'editor.cursorShape': 'line',
        'editor.reuseHeaders': true,
        'tracing.hideTracingResponse': true,
        'queryPlan.hideQueryPlanResponse': true,
        'editor.fontSize': 14,
        'editor.fontFamily': `'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace`,
        'request.credentials': 'omit',
      },
    }),
  ],
});
// start server
server.listen({ port: process.env.PORT || 7000 }).then(({ url }) => {
  console.log('Server listening on port ' + url);
});
