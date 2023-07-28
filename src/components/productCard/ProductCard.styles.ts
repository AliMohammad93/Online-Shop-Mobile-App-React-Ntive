import { Dimensions, StyleSheet } from "react-native";
import theme from "../../theme/theme";
const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    width: screenWidth / 2 - 20,
    marginVertical: theme.spaceY.sm,
    marginHorizontal: theme.spaceX.sm,
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.scaling.horizontalScale(20),
    paddingVertical: theme.scaling.verticalScale(15),
    borderRadius: theme.scaling.moderateScale(10),
  },
  image: {
    width: "100%",
    height: theme.scaling.verticalScale(200)
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
