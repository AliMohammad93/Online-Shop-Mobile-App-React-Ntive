import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from "./Indicator.styles";
import theme from "../../theme/theme";
const Indicator = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={theme.colors.primary} />
  </View>
);
export default Indicator;
