import React from "react";
import { View, Text } from "react-native";
import styles from "./ErrorMessage.styles";
const ErrorMessage = () => (
  <View style={styles.container}>
    <Text style={styles.text}>something went wrong please try again.</Text>
  </View>
);
export default ErrorMessage;
