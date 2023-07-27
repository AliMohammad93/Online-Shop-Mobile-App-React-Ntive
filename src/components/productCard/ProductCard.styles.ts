import { Dimensions, StyleSheet } from "react-native";
import theme from "../../theme/theme";
const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    width: screenWidth / 2 - 20,
    marginVertical: theme.spaceX.md,
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.scaling.horizontalScale(20),
    paddingVertical: theme.scaling.verticalScale(10),
    borderRadius: theme.scaling.moderateScale(10),
  },
  favouriteButtonContainer: {
    alignItems: 'flex-end',
  },
  image: {
    width: "100%",
    height: theme.scaling.verticalScale(100)
  },
  textContainer : {
    flex:1,
    justifyContent:'space-between'
  },
  title: {
    marginVertical: theme.scaling.verticalScale(5),
    ...theme.typography.body
  },
  price: {
    ...theme.typography.body
  }
});
export default styles;
