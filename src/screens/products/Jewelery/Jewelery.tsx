import React from "react";
import { Text, View } from "react-native";
import { IProduct } from "../../../types/productTypes";
import { withProductsFetching } from "../../../hoc/withProductsFetching";
const Jewelery = ({ products }: { products: IProduct[], searchTerm: string }) => {
  return (
    <View>
      <Text>Jeweleries</Text>

      {products?.map(product => (
        <Text key={product.id}>{product.title}</Text>
      ))}
    </View>
  );
};
export default withProductsFetching(Jewelery, "jewelery");
