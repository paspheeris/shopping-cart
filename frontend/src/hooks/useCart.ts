import {User} from '../../../common/types/User';
import {CartItem, CartItemResponse} from '../../../common/types/CartItem';
import apiClient from "../util/apiClient";
import { useQuery, QueryStatus } from "react-query";

const getCartItems = ( user: User ) => async (): Promise<CartItem[]> => {
  const { data } = await apiClient.get<CartItemResponse>(
    `/cart?userId=${user.id}`
  );

  if (!data.cartItems) {
    const errorMessage: string =
      data.message || "There was a problem retrieving the cart items.";
    throw new Error(errorMessage);
  }

  return data.cartItems;
};

const useCart = (user: User): {
  data: CartItem[], status: QueryStatus,
} => {
  const {data, status} = useQuery(user.email, getCartItems(user), {
    staleTime: 0,
  })

  return {data: data || [], status};
}


export default useCart;
