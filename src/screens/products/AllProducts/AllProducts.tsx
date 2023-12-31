import React, {FC} from 'react';
import {withProductsFetching} from '../../../hocs/withProductsFetching/withProductsFetching';
import {IProductsScreenProps} from '../types/productsScreenProps';
const AllProducts: FC<IProductsScreenProps> = ({children}) => {
  return <>{children}</>;
};
export default withProductsFetching(AllProducts);
