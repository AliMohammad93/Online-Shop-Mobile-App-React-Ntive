import {IProduct} from '../types/productTypes';
import {API_URL} from '@env';
export const getProducts = async (
  category: string,
  searchTerm: string,
): Promise<IProduct[]> => {
  try {
    const response = await fetch(API_URL + category);
    if (!response.ok) {
      throw new Error(`get data from api error! : ${response.status}`);
    }
    const data = await response.json();
    return data.filter((product: IProduct) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  } catch (error) {
    throw error;
  }
};
