
exports.up = function(knex) {
  return knex.schema
    .createTable('user', function(table) {
      table.increments('id').primary();
      table.text('email').notNull();
    })
    .createTable('product', function(table) {
      table.increments('id').primary();
      table.text('name').notNull();
      table.text('description').notNull();
      table.text('price').notNull();
      table.text('image');
      table.text('gender');
    })

    .createTable('variant', function(table) {
      table.increments('id').primary();
      table.text('name').unique().notNull();
    })

    .createTable('product_variant', function(table) {
      table.increments('id').primary();
      table.integer('product_id').references('id').inTable('product').notNull().onDelete('cascade');
      table.integer('variant_id').references('id').inTable('variant').notNull().onDelete('cascade');
      table.integer('quantity').notNull();
    })

    .createTable('cart', function(table) {
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('user').notNull().onDelete('cascade');
      table.integer('product_id').references('id').inTable('product').notNull().onDelete('cascade');
      table.integer('variant_id').references('id').inTable('variant').notNull().onDelete('cascade');
      table.integer('quantity').notNull();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user')
    .dropTable('product')
    .dropTable('variant')
    .dropTable('product_variant')
    .dropTable('cart')
};
