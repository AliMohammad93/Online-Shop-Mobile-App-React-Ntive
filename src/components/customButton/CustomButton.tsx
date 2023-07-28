import React from 'react';
import {StyleSheet, Text , TouchableOpacity} from 'react-native';
import theme from "../../theme/theme";
const CustomButton = () => {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.title}>Add to the cart</Text>
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:theme.colors.primary,
    width:theme.scaling.horizontalScale(250),
    padding:theme.scaling.moderateScale(10),
    borderRadius:theme.scaling.moderateScale(20),
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    ...theme.typography.body,
    color:theme.colors.white,
    fontWeight:'bold'
  }
});
export default CustomButton;
