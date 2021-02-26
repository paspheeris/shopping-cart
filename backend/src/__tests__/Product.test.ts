import supertest from 'supertest';
import StatusCodes from 'http-status-codes';
import { SuperTest, Test } from 'supertest';
import app from '../Server';
import {Product} from '../../../common/types/Product';

import { knex } from '../Server';

describe('Product Routes', () => {
  const productPath = '/api/product';
  const getProductPath = `${productPath}`;

  const { OK } = StatusCodes;

  let agent: SuperTest<Test>;

  beforeAll(async (done) => {
    await knex.migrate.latest();
    await knex.seed.run();

    agent = supertest.agent(app);
    done();
  });

  describe(`"GET:${getProductPath}"`, () => {
    it(`should return an array of products and a status code of "${OK}" if the request was successful.`, (done) => {
      agent.get(getProductPath)
        .end((err, res) => {
          expect(res.status).toBe(OK);

          const {products} = res.body;
          expect(products.length).toBeGreaterThan(0);
          products.forEach(( product: Product ) => {
            expect(typeof product.id).toBe('number');
            expect(typeof product.name).toBe('string');
            expect(typeof product.description).toBe('string');
            expect(typeof product.price).toBe('string');
            expect(Array.isArray(product.variants)).toBe(true);
          })
          done();
        });
    });

  });
});
