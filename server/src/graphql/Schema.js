// "Cheatz" https://github.com/mpj/fff-graphql-goodreads

const fetch = require('node-fetch');
const { GraphQLSchema, GraphQLObjectType, GraphQLList } = require('graphql');

const LocationType = require('./types/LocationType');
const RootMutationType = require('./mutations/RootMutationType');

// Export schema
module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      location: {
        type: new GraphQLList(LocationType),
        resolve: async () => {
          console.log('Fetch data');
          const koskiData = await fetch('http://fake-services:3000/fake-services/fishing/all-locations');
          const d = koskiData.json();
          console.log('data 1', d);
          return d;
        },
      },
    }),
  }),
  mutation: RootMutationType,
});
