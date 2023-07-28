import React, { FC } from "react";
import { withProductsFetching } from "../../../hoc/withProductsFetching/withProductsFetching";
import { IProductsScreenProps } from "../../../types/productTypes";
const WomenClothing: FC<IProductsScreenProps> = ({ children }) => {
  return <>{children}</>;
};
export default withProductsFetching(WomenClothing, "category/women's%20clothing");
