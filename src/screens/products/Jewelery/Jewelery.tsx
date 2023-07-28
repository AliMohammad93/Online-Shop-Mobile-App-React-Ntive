import React, { FC } from "react";
import { withProductsFetching } from "../../../hoc/withProductsFetching/withProductsFetching";
import { IProductsScreenProps } from "../../../types/productTypes";
const Jewelery: FC<IProductsScreenProps> = ({ children }) => {
  return <>{children}</>;
};
export default withProductsFetching(Jewelery, "category/jewelery");
