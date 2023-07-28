import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

const styles = StyleSheet.create({
  favouriteButtonContainer: {
    alignItems: "flex-end",
    marginBottom: theme.spaceX.sm,
    flex: 1
  },
  favouriteButtonBackground: {
    width: theme.scaling.horizontalScale(25),
    height: theme.scaling.horizontalScale(25),
    borderRadius:theme.scaling.moderateScale(25),
    justifyContent:'center',
    alignItems:'center'
  },
  selectedBackground :{
    backgroundColor: 'rgba(252, 87, 91, 0.2)',
  },
  unselectedBackground:{
    backgroundColor: 'rgba(238, 238, 238, 0.9)',
  },
  selected: {
    color: theme.colors.red
  },
  unselected: {
    color: theme.colors.secondary
  }
});
export default styles;
