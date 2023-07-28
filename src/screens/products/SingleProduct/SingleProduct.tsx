import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { ProductScreenRouteProp } from "../../../navigation/StackNavigator/types";
import { useRoute } from "@react-navigation/native";
import { useGetProduct } from "../../../hooks/useGetProduct";
import Indicator from "../../../components/indicator/Indicator";
import styles from "./SingleProduct.styles";
import CustomButton from "../../../components/customButton/CustomButton";
import * as Animatable from "react-native-animatable";
const SingleProduct = () => {
  const route = useRoute<ProductScreenRouteProp>();
  const [data, loading, error] = useGetProduct(route.params.id);
  if (error) return <Text>Something went wrong </Text>;
  if (loading) return <Indicator />;
  return (
    <View style={styles.container}>
      {data?.image && (
        <View style={styles.imageContainer}>
          <Animatable.Image
            source={{ uri: data?.image }}
            style={styles.image}
            resizeMode={"contain"}
            animation="fadeIn"
          />
        </View>
      )}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.descriptionContainer}>
        <Text style={styles.title}>{data?.title}</Text>
        <Animatable.View style={styles.priceContainer} animation={"fadeInRight"}>
          <Text style={styles.price}>{data?.price} €</Text>
        </Animatable.View>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Animatable.Text style={styles.description} animation={"fadeInUpBig"}>{data?.description}</Animatable.Text>
        <Animatable.View style={styles.buttonContainer} animation={"fadeInLeft"}>
          <CustomButton title={'Add to cart'} onPress={()=>{}} />
        </Animatable.View>
      </ScrollView>
    </View>
  );
};
export default SingleProduct;
