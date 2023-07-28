import React from "react";
import { View, Text } from "react-native";
import styles from "./NoResults.styles";
const NoResults = () => (
  <View style={styles.container}>
    <Text style={styles.text}>There is no results.</Text>
  </View>
);
export default NoResults;
