import React, { FC } from "react";
import {FlatList, RefreshControl } from "react-native";
import { withProductsFetching } from "../../../hoc/withProductsFetching";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParamList } from "../../../navigation/types";
import { IProduct, IProductsScreenProps } from "../../../types/productTypes";
import ProductCard from "../../../components/productCard/ProductCard";
const AllProducts: FC<IProductsScreenProps> = ({ products, refreshing, getProducts }) => {
  const navigation = useNavigation<StackNavigationProp<StackNavigatorParamList>>();
  const renderItem = ({ item }: { item: IProduct }) => (
    <ProductCard product={item} navigation={navigation} />
  );
  return (
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "space-around"
        }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getProducts} />}
      />
  );
};

export default withProductsFetching(AllProducts);
