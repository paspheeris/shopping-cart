import { Router } from 'express';
import ProductsRouter from './product';
import CartRouter from './cart';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/product', ProductsRouter);
router.use('/cart', CartRouter);

// Export the base-router
export default router;
