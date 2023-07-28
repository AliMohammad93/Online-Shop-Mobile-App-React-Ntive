import {View, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import theme from "../../../theme/theme";
import styles from "./CustomHeader.styles";
import React from "react";
const CustomHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesomeIcon icon={faArrowLeft} size={theme.scaling.moderateScale(24)}  />
    </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
