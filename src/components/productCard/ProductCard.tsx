import { TouchableOpacity, Image, Text, View } from "react-native";
import React, { FC, useState } from "react";
import FavouriteButton from "../favouriteButton/FavouriteButton";
import styles from "./ProductCard.styles";
import { IProductCardProps } from "./types";

const ProductCard: FC<IProductCardProps> = ({ product, navigation }) =>
  (<TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Product", { id: product.id })}>
      <FavouriteButton/>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode={"contain"}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price} €</Text>
      </View>
    </TouchableOpacity>
  );


export default ProductCard;
