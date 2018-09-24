const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding')

const graphQLSchema = './src/schema.graphql';

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const AuthPayload = require('./resolvers/AuthPayload')
const Subscription = require('./resolvers/Subscription')

// Actual implemention of graphql schema
// C#: similar to object of a class
  const resolvers = {
    Query,
    Mutation,
    AuthPayload,
    Subscription,
  }

// passing typeSchema, resolvers tell server which api operations are acceptable and how they should be resolved.
const server = new GraphQLServer({
  typeDefs: graphQLSchema,
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://eu1.prisma.sh/itscijo/database/dev',
      secret: 'mysecret123',
      debug: true,
    }),
  }),
})
server.start(() => console.log(`Server is running on http://localhost:4000`))

