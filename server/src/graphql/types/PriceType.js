const { GraphQLObjectType, GraphQLString } = require('graphql');

const PriceType = new GraphQLObjectType({
  name: 'Price',
  description: '...',

  fields: () => ({
    amount: {
      type: GraphQLString,
      resolve: priceObject => priceObject.price,
    },
  }),
});

module.exports = PriceType;
