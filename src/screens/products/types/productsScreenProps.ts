import {ReactNode} from 'react';
import {IProduct} from '../../../types/productTypes';

export interface IProductsScreenProps {
  products: IProduct[];
  refreshing: boolean;
  getProducts: () => {};
  children: ReactNode;
}
