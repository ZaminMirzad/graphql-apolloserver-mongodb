const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    _id: String!
    firstName: String!
    lastName: String!
    email: String!
    phone: String
    favorites: [String]
  }

  # query types
  type Query {
    users: [User]
    user(id: ID): User
  }

  # input types
  input CreateUserInput {
    firstName: String!
    lastName: String
    email: String
    phone: String
  }
  input UpdateUserInput {
    firstName: String
    lastName: String
    email: String
    phone: String
  }
  type DeleteUserInput {
    id: ID!
  }

  # mutation types
  type Mutation {
    createUser(userData: CreateUserInput!): User!
    updateUser(id: ID, userData: UpdateUserInput!): User!
    deleteUser(id: ID): DeleteUserInput!
    updateUserFavorites(userId: ID, productId: ID): User
  }
`;
