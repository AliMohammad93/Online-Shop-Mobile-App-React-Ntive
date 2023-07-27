import React  from "react";
import { Image, Text, View } from "react-native";
import {ProductScreenRouteProp} from "../../../navigation/types";
import { useRoute } from "@react-navigation/native";
import { useGetProduct } from "../../../hooks/useGetProduct";
import Indicator from "../../../components/indicator/Indicator";
import theme from "../../../theme/theme";
const Product = () => {
  const route = useRoute<ProductScreenRouteProp>();
  const [data, loading, error] = useGetProduct(route.params.id);
  if (error) return <Text>Something went wrong </Text>;
  if (loading) return <Indicator />
  console.log(theme.typography.h3);
  return (
    <View>
      <Text style={[theme.typography.h3 , {color:theme.colors.primary}]}>Single Products {data?.title}</Text>
      <Image
        source={{ uri: data?.image }}
        style={{ width: '100%', height: 400}} />
    </View>
  );
};
export default Product;
