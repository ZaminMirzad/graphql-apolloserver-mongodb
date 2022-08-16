const { ApolloServer, gql } = require('apollo-server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');
const { MoviesAPI, PersonlizedAPI } = require('./tmdbApi.js');

//? first we need to define a schema
// schema is a collection of type definitions
// which defines the 'shape' of the queries that are executed
// against your data.

// here our schema is called 'typeDefs'
const typeDefs = gql`
  # this 'Book' type defines the queryable fields for
  # every book record in our data source.

  type Book {
    id: ID!
    title: String
    author: String
  }

  type Genre {
    id: ID
    name: String
  }
  type Movie {
    id: ID
    name: String
    title: String
    backdrop_path: String
    vote_average: Float
    poster_path: String
    release_date: String
    genres: [Genre]
  }

  # the  'Query' type is special: it lists all of the
  # available queries that clients can execute, along with
  # the return type for each.
  # here in our case, the 'books' query returns an array of
  # zero or more books defined above in this schema.

  type Query {
    books: [Book]
  }

  type Query {
    book(id: ID): Book
    movies: [Movie]
    movie(id: ID): Movie
  }

  type Mutation {
    addBook(title: String, author: String, id: ID): Book
  }
`;

//? second, now that our schema is set up and our data is ready
// we need to pass it to the clients. which is done by
// the resolvers

// resolvers define the way to fetch the types defined in our
// schema 'in our case bookSchema'

// below resolver retrieves books from the booksArray imported
// from the sampleData.js file

// here we define our resolvers
const resolvers = {
  Query: {
    books: () => booksArray,
    book(_, args) {
      return booksArray.find((book) => book.id === args.id);
    },
    movies: async (_, __, { dataSources }) => {
      return dataSources.moviesAPI.getAllMovies();
    },
    movie: async (_, args, { dataSources }) => {
      return dataSources.moviesAPI.getMovieById(args.id);
    },
  },

  Mutation: {
    addBook: (_, payload) => {
      return payload;
    },
  },
};

//? third, now that we have our schema, data and resolvers
// set up, we need to create our server

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      moviesAPI: new MoviesAPI(),
      // personlizedAPI: new PersonlizedAPI(),
    };
  },
  // context: () => {
  //   return {
  //     token: '397c42a96d2c187c2a4912fccc6be558',
  //   };
  // },
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

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log('ApolloServer listening on ' + url);
});
