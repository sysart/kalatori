const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const PriceType = require('./PriceType');

const LocationType = new GraphQLObjectType({
  name: 'Location',
  description: '...',

  fields: () => ({
    address: {
      type: GraphQLString,
      resolve: location => location.address,
    },
    price: {
      type: new GraphQLList(PriceType),
      resolve: location => location.prices,
    },
  }),
});

module.exports = LocationType;
