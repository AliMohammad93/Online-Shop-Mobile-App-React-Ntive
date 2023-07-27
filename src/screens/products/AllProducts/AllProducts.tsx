import React, {FC} from "react";
import { Text, View, FlatList, RefreshControl } from "react-native";
import { withProductsFetching } from "../../../hoc/withProductsFetching";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParamList } from "../../../navigation/types";
import { IProduct  , IProductsScreenProps} from "../../../types/productTypes";
import { ProductItem } from "../../../components/productItem/ProductItem";
const AllProducts : FC <IProductsScreenProps> = ({ products, refreshing, getProducts }) => {
  const navigation = useNavigation<StackNavigationProp<StackNavigatorParamList>>();
  const renderItem = ({ item }: { item: IProduct }) => (
    <ProductItem product={item} navigation={navigation} />
  );
  return (
    <View>
      <Text>All products</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}                  // set number of columns
        columnWrapperStyle={{flex: 1,
          justifyContent: "space-around"}}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getProducts} />}
      />
    </View>
  );
};

export default withProductsFetching(AllProducts);
