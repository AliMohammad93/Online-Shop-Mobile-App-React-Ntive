import React, {FC} from 'react';
import {withProductsFetching} from '../../../hocs/withProductsFetching/withProductsFetching';
import {IProductsScreenProps} from '../types/productsScreenProps';
const WomenClothing: FC<IProductsScreenProps> = ({children}) => {
  return <>{children}</>;
};
export default withProductsFetching(WomenClothing, "category/men's%20clothing");
