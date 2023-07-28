import React, { FC } from "react";
import { withProductsFetching } from "../../../hocs/withProductsFetching/withProductsFetching";
import { IProductsScreenProps } from "../../../types/productTypes";
const Electronics: FC<IProductsScreenProps> = ({ children }) => {
  return <>{children}</>;
};
export default withProductsFetching(Electronics, "category/electronics");
