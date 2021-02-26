import apiClient from "../util/apiClient";
import {Product, ProductResponse} from '../../../common/types/Product';
import { useQuery, QueryStatus } from "react-query";

const getResources = async (): Promise<Product[]> => {
  const {data} = await apiClient.get<ProductResponse>('/product');

  if (!data.products) {
    const errorMessage: string =
      data.message || "There was a problem retrieving the products.";
    throw new Error(errorMessage);
  }

  return data.products;
};

const useProducts = (): {
  data: Product[] | undefined;
  status: QueryStatus;
} => {

  return useQuery('products', getResources, {
    staleTime: 900000, // 15 min
  });
};

export default useProducts;
