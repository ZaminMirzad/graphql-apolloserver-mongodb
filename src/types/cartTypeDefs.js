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
    count: Int
  }
  type Cart {
    _id: String
    userId: String
    items: [Product]
  }

  type Query {
    cartItems: Cart
    cartItem(id: ID): Cart
  }

  # AddToCartInput
  input RateInput {
    rate: Float
    count: Int
  }
  input Item {
    _id: String
    title: String
    description: String
    category: String
    image: String
    price: Float
    rating: RateInput
  }
  input AddToCartInput {
    id: String
    userId: String!
    totalItems: Int
    totalPrice: Float
    items: [Item]!
  }

  type DeleteInput {
    id: ID!
  }
  # mutation
  type Mutation {
    addToCart(item: AddToCartInput!): Cart
    deleteFromCart(id: ID!): DeleteInput
    updateCartItem(id: ID!, updateInputs: AddToCartInput!): Product
  }
`;
