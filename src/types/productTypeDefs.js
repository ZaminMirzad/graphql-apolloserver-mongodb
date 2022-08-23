const { gql } = require('apollo-server');

module.exports = gql`
  type Rate {
    rate: Float
    count: Int
  }
  type Product {
    _id: String
    title: String
    description: String
    category: String
    image: String
    price: Float
    rating: Rate
  }

  # query type
  type Query {
    products: [Product]
    product(id: ID): Product
  }

  # addProductInput
  input CreateProductInput {
    title: String!
    category: String
    image: String
    price: Float
  }

  type DeleteInput {
    id: ID!
  }

  # mutation type
  type Mutation {
    addProduct(productDetails: CreateProductInput): Product
    deleteProduct(id: ID): DeleteInput
  }
`;
