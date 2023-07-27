import React from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { IProduct } from "../../../types/productTypes";
import { withProductsFetching } from "../../../hoc/withProductsFetching";

const Electronics = ({ products }: { products: IProduct[] }) => {
  const renderItem = ({ item }: { item: IProduct }) => (
    <TouchableOpacity style={{ margin: 10 }} onPress={() => console.log('You tapped the item!')}>
      <Image
        source={{ uri: item.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text>Electronics</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default withProductsFetching(Electronics, "electronics");
