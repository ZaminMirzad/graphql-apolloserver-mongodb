const mutations = require('./mutations/allMutations.js');
const queries = require('./queries/allQueries.js');

module.exports = {
  Mutation: {
    ...mutations,
  },
  Query: {
    ...queries,
  },
};
