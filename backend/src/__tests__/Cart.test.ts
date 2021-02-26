import supertest from 'supertest';
import StatusCodes from 'http-status-codes';
import { SuperTest, Test } from 'supertest';
import app from '../Server';
import {CartItem} from '../../../common/types/CartItem';

import { knex } from '../Server';

describe('Cart Routes', () => {
  const cartPath = '/api/cart';
  const getCartPath = `${cartPath}?userId=1`;
  const postCartPath = `${cartPath}?userId=1`;

  const { OK } = StatusCodes;

  let agent: SuperTest<Test>;

  beforeAll(async (done) => {
    await knex.migrate.latest();
    await knex.seed.run();

    agent = supertest.agent(app);
    done();
  });

  beforeEach(async (done) => {
    await knex('cart').insert({
      id: 1,
      user_id: 1,
      product_id: 1,
      variant_id: 1,
      quantity: 1,
    });
    done();
  })
  afterEach(async (done) => {
    await knex('cart').delete();
    done();
  })

  describe(`"GET:${cartPath}"`, () => {
    it(`should return an array of cart items and a status code of "${OK}" if the request was successful.`, (done) => {
      agent.get(getCartPath)
        .end((err, res) => {
          expect(res.status).toBe(OK);

          const {cartItems} = res.body;
          expect(cartItems.length).toBeGreaterThan(0);
          cartItems.forEach(( cartItem: CartItem ) => {
            expect(typeof cartItem.quantity).toBe('number');
            expect(typeof cartItem.product).toBe('object');
            expect(typeof cartItem.variant).toBe('object');
          })
          done();
        });
    });
  });

  describe(`"POST:${postCartPath}"`, () => {
    it(`a cart item can be created`, async (done) => {
      const initialCount = ( await knex('cart').select() ).length;

      agent.post(postCartPath)
        .send({
          userId: 2,
          productId: 2,
          variantId: 2,
          quantity: 2,
        })
        .end(async (err, res) => {
          expect(res.status).toBe(OK);

          const count = ( await knex('cart').select() ).length;
          expect(count).toEqual(initialCount + 1);

          done();
        });
    });
  });

  describe(`"DELETE:${cartPath}"`, () => {
    it(`a user's entire cart can be deleted`, async (done) => {
      await knex('cart').insert({
        id: 2,
        user_id: 1,
        product_id: 2,
        variant_id: 2,
        quantity: 2,
      });

      const initialCart = await knex('cart').select();
      expect(initialCart.length).toBeGreaterThan(1);

      agent.delete(`${cartPath}?userId=1`)
        .end(async (err, res) => {
          expect(res.status).toBe(OK);

          const count = ( await knex('cart').select({user_id: 1}) ).length;
          expect(count).toEqual(0);

          done();
        });
    });

    it(`a single item can be deleted from a users cart`, async (done) => {
      await knex('cart').insert({
        id: 2,
        user_id: 1,
        product_id: 2,
        variant_id: 2,
        quantity: 2,
      });

      const initialCount = ( await knex('cart').select() ).length;
      expect(initialCount).toBeGreaterThan(1);

      agent.delete(`${cartPath}?userId=1&variantId=2&productId=2`)
        .end(async (err, res) => {
          expect(res.status).toBe(OK);

          const count = ( await knex('cart').select({user_id: 1}) ).length;
          expect(count).toEqual(initialCount - 1);

          done();
        });
    });
  });
});
