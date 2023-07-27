import React from "react";
import { Text, View } from "react-native";
import { IProduct } from "../../../types/productTypes";
import { withProductsFetching } from "../../../hoc/withProductsFetching";
const WomenClothing = ({ products }: { products: IProduct[], searchTerm: string }) => {
  return (
    <View>
      <Text>Women Clothing</Text>

      {products?.map(product => (
        <Text key={product.id}>{product.title}</Text>
      ))}
    </View>
  );
};
export default withProductsFetching(WomenClothing, "women's%20clothing");
