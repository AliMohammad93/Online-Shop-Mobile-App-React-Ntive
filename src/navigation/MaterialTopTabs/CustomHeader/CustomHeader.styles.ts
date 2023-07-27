import { StyleSheet } from "react-native";
import theme from "../../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    padding: theme.spaceY.lg,
    backgroundColor: theme.colors.background
  },
  greeting: {
    ...theme.typography.h3,
    color: theme.colors.secondary,
    marginBottom: theme.spaceY.xs
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.primary,
    marginBottom: theme.spaceY.md
  },
  searchBox: {
    height: theme.scaling.verticalScale(50),
    backgroundColor: theme.colors.white,
    ...theme.typography.body,
    paddingHorizontal: theme.scaling.horizontalScale(10),
    paddingVertical: theme.scaling.verticalScale(10),
    borderRadius: theme.scaling.moderateScale(5)
  }
});
