const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phone: String
  }

  # query types
  type Query {
    getUsers: [User]
    getUserById(id: ID): User
  }

  # input types
  input createUserInput {
    firstName: String!
    lastName: String!
    email: String!
    phone: String
  }
  input updateUserInput {
    firstName: String
    lastName: String
    email: String
    phone: String
  }
  input deleteUserInput {
    id: ID!
  }

  # mutation types
  type Mutation {
    createUser(userData: createUserInput!): User!
    updateUser(id: ID, userData: updateUserInput!): User!
    deleteUser(id: ID): deleteUserInput!
  }
`;

module.exports = [typeDefs];
