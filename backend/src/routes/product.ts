import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { knex } from '../Server';
const router = Router();
const { OK } = StatusCodes;


router.get('/', async (req: Request, res: Response) => {
  const productsQuery = await knex('product')
  .innerJoin('product_variant', 'product.id', 'product_variant.product_id')
  .innerJoin('variant', 'variant.id', 'product_variant.variant_id')
  .select({
    id: 'product.id',
    name: 'product.name',
    description: 'product.description',
    price: 'product.price',
    image: 'product.image',
    gender: 'product.gender',
    variantName: 'variant.name',
    variantQuantity: 'product_variant.quantity',
    variantId: 'variant.id',
  });
  const collectedVariants = productsQuery.reduce((accum: any, item: any) => {
    const {name} = item;
    if(!accum[name]) accum[name] = {
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      image: item.image,
      gender: item.gender,
      variants: [],
    };
    accum[name].variants.push({
      id: item.variantId,
      name: item.variantName,
      quantity: item.variantQuantity,
    })
    return accum;
  }, {});
  const products = Object.values(collectedVariants);
  return res.status(OK).json({ products });
});

export default router;
