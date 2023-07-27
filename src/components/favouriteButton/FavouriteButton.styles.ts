import { StyleSheet } from "react-native";
import theme from "../../theme/theme";
const styles = StyleSheet.create({
  favouriteButtonContainer: {
    alignItems: 'flex-end',
  },
  selected:{
    color:'red'
  },
  unSelected:{
    color:theme.colors.secondary
  }
});
export default styles;
