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
    cartTotalItems: Int
    cartTotalPrice: Float
    items: [Product]
  }

  type Query {
    cartItems: [Cart]
    cartItem(id: ID): Cart
    userOrders(userId: String!): [Cart]
    order(id: String!): Cart
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
    count: Int
  }
  input AddToCartInput {
    userId: String!
    cartTotalItems: Int
    cartTotalPrice: Float
    items: [Item]!
  }

  type DeleteInput {
    id: ID!
  }
  # mutation
  type Mutation {
    addToMyOrders(item: AddToCartInput!): Cart
    deleteFromCart(id: ID!): DeleteInput
    updateCartItem(id: ID!, updateInputs: AddToCartInput!): Product
  }
`;
