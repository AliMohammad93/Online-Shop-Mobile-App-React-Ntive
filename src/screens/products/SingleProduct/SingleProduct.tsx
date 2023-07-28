import React  from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { ProductScreenRouteProp } from "../../../navigation/StackNavigator/types";
import { useRoute } from "@react-navigation/native";
import { useGetProduct } from "../../../hooks/useGetProduct";
import Indicator from "../../../components/indicator/Indicator";
import theme from "../../../theme/theme";
import CustomButton from "../../../components/customButton/CustomButton";

const SingleProduct = () => {
  const route = useRoute<ProductScreenRouteProp>();
  const [data, loading, error] = useGetProduct(route.params.id);
  if (error) return <Text>Something went wrong </Text>;
  if (loading) return <Indicator />;
  return (
    <View style={styles.container}>
      {data?.image && (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: data?.image }}
            style={styles.image}
            resizeMode={"contain"}
          />
        </View>
      )}

        <ScrollView style={styles.scrollView} contentContainerStyle={styles.descriptionContainer}>
          <Text style={styles.title}>{data?.title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{data?.price} €</Text>
          </View>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{data?.description}</Text>
          <View style={styles.buttonContainer}>
            <CustomButton/>
          </View>
        </ScrollView>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: theme.colors.white
  },
  imageContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: theme.scaling.verticalScale(250)
  },
  title: {
    marginBottom: theme.spaceY.md,
    ...theme.typography.body,
    fontWeight: "bold"
  },
  scrollView: {
    flex: 1,
    marginHorizontal: theme.spaceX.sm,
    backgroundColor: theme.colors.background,
    borderRadius: theme.scaling.moderateScale(20),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: "hidden"
  },
  descriptionContainer: {
    backgroundColor: theme.colors.background,
    borderTopStartRadius: theme.scaling.moderateScale(20),
    borderTopEndRadius: theme.scaling.moderateScale(20),
    paddingHorizontal: theme.spaceX.lg,
    paddingVertical: theme.spaceY.lg
  },
  priceContainer: {
    alignSelf: "flex-end",
    backgroundColor: theme.colors.primary,
    width: theme.scaling.horizontalScale(75),
    paddingHorizontal: theme.scaling.horizontalScale(5),
    paddingVertical: theme.scaling.verticalScale(10),
    alignItems: "center",
    marginRight: theme.scaling.horizontalScale(-24),
    borderTopLeftRadius: theme.scaling.moderateScale(19),
    borderBottomLeftRadius: theme.scaling.moderateScale(19)
  },
  price: {
    color: theme.colors.white,
    ...theme.typography.body,
    fontWeight: "bold"
  },
  descriptionTitle: {
    ...theme.typography.body,
    marginBottom: theme.spaceY.sm,
    fontWeight: "bold"
  },
  description: {
    ...theme.typography.body

  },
  buttonContainer: {
    marginTop: theme.spaceY.lg,
    alignItems: "center"
  }
});


export default SingleProduct;
