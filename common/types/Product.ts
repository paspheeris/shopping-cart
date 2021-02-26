import {Variant} from './Variant';

export interface Product {
  id: number,
  name: string,
  description: string,
  price: string,
  image?: string,
  gender?: string,
  variants: Variant[],
}

export interface ProductResponse {
  message?: string,
  products?: Product[],
}
