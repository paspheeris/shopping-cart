const userData = require('../../common/mockData/user.json');
const productData = require('../../common/mockData/product.json');
const variantData = require('../../common/mockData/variant.json');
const productVariantData = require('../../common/mockData/product_variant.json');

exports.seed = function(knex, Promise) {
  return knex('user').del()
    .then(() => {
      return knex('product').del();
    })
    .then(() => {
      return knex('variant').del();
    })
    .then(() => {
      return knex('product_variant').del();
    })
    .then(() => {
      return knex('cart').del();
    })
    .then(() => {
      return knex('user').insert(userData);
    })
    .then(() => {
      return knex('product').insert(productData);
    })
    .then( async () => {
      return knex('variant').insert(variantData);
    })
    .then( async () => {
      const productQueryResult = await knex('product').select([ 'id', 'name' ]);
      const productNameIdDict = productQueryResult.reduce((accum, data ) => {
        accum[data.name] = data.id;
        return accum;
      }, {});

      const variantQueryResult = await knex('variant').select([ 'id', 'name' ]);
      const variantNameIdDict = variantQueryResult.reduce((accum, data ) => {
        accum[data.name] = data.id;
        return accum;
      }, {});

      const productVariantsWithIds = productVariantData.map(d => ({
        product_id: productNameIdDict[d.productName],
        variant_id: variantNameIdDict[d.variantName],
        quantity: d.quantity,
      }));


      return knex('product_variant').insert(productVariantsWithIds);
    })
}
