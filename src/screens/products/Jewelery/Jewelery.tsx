import React, { FC } from "react";
import { withProductsFetching } from "../../../hocs/withProductsFetching/withProductsFetching";
import { IProductsScreenProps } from "../../../types/productTypes";
const Jewelery: FC<IProductsScreenProps> = ({ children }) => {
  return <>{children}</>;
};
export default withProductsFetching(Jewelery, "category/jewelery");
