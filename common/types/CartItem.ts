import {Variant} from './Variant';
import {Product} from './Product';

export interface CartItem {
  quantity: number,
  product: Omit<Product, 'variants'>,
  variant: Variant,
}

export interface CartItemResponse {
  message?: string,
  cartItems?: CartItem[],
}
