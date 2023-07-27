import { Dimensions, StyleSheet , TouchableOpacity , Image , Text} from 'react-native';
import React, {FC} from "react";
import {IProduct} from "../../types/productTypes";
import {StackNavigatorParamList} from "../../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";
interface ProductItemProps {
  product: IProduct;
  navigation: StackNavigationProp<StackNavigatorParamList>;
}
const screenWidth = Dimensions.get('window').width;
export const ProductItem: FC<ProductItemProps> = ({ product, navigation }) => (
  <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Product", { id: product.id })}>
    <Image
      source={{ uri: product.image }}
      style={styles.image}
    />
    <Text>{product.title}</Text>
    <Text>{product.price}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    width: screenWidth / 2 - 20, // Subtracting some margin
    margin: 10,
  },
  image: {
    width: '100%', // The image will take the full width of the container
    height: 100,
  },
});
