import { IProduct } from "../types/productTypes";
export const getProducts = async (url: string, searchTerm: string) : Promise<IProduct[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`get data from api error! : ${response.status}`);
    }
    const data = await response.json();
   return data.filter((product: IProduct) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } catch (error) {
    throw error;
  }
}
