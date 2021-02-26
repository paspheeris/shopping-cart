import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { knex } from '../Server';
const router = Router();
const { OK } = StatusCodes;

router.get('/', async (req: Request, res: Response) => {
  const { userId } = req.query;

  const cartQuery = await knex('cart')
  .innerJoin('product', 'product.id', 'cart.product_id')
  .innerJoin('variant', 'variant.id', 'cart.variant_id')
    // .innerJoin('product_variant', 'variant.id', 'cart.variant_id')
    .innerJoin('product_variant', function(this: any) {
      this.on('cart.product_id', '=', 'product_variant.product_id')
      this.andOn('cart.variant_id', '=', 'product_variant.variant_id')
    })
  .select({
    quantity: 'cart.quantity',
    productId: 'product.id',
    productName: 'product.name',
    productDescription: 'product.description',
    productPrice: 'product.price',
    productImage: 'product.image',
    productGender: 'product.gender',
    variantName: 'variant.name',
    variantQuantity: 'product_variant.quantity',
    variantId: 'variant.id',
  })
    .where({user_id: userId});
  // const cartQuery = await knex('cart').select();
  const cartItems = cartQuery.map((item: any) => {
    return ({
      product: {
        id: item.productId,
        name: item.productName,
        description: item.productDescription,
        price: item.productPrice,
        image: item.productImage,
        gender: item.productGender,
      },
      variant: {
        id: item.variantId,
        name: item.variantName,
        quantity: item.variantQuantity,
      },
      quantity: item.quantity,
    })
  });
  return res.status(OK).json({ cartItems });
});

router.post('/', async (req: Request, res: Response) => {
  const {
    userId,
    productId,
    variantId,
    quantity,
  } = req.body;

  await knex('cart')
    .insert({
      user_id: userId,
      product_id: productId,
      variant_id: variantId,
      quantity,
    })

  return res.status(OK).send();
});

router.delete('/', async (req: Request, res: Response) => {
  const { userId, productId, variantId } = req.query;

  // Delete user's whole cart
  if(!productId) {
    await knex('cart')
      .delete()
      .where({user_id: userId});
  }

  // Delete a specific item
  if(productId && variantId) {
    await knex('cart')
      .delete()
      .where({
        product_id: productId,
        variant_id: variantId,
        user_id: userId,
      });
  }


  return res.status(OK).send();
});

router.patch('/', async (req: Request, res: Response) => {
  const {
    userId,
    productId,
    variantId,
    quantity,
  } = req.body;

  await knex('cart')
    .update({quantity})
    .where({
      user_id: userId,
      product_id: productId,
      variant_id: variantId,
    });

  return res.status(OK).send();
});

export default router;

