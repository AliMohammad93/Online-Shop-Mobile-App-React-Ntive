import {StyleSheet} from 'react-native';
import theme from '../../theme/theme';
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    paddingVertical: theme.scaling.verticalScale(10),
    paddingHorizontal: theme.scaling.horizontalScale(10),
    borderRadius: theme.scaling.moderateScale(5),
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: theme.spaceY.lg,
  },
  text: {
    color: theme.colors.primary,
    ...theme.typography.h3,
  },
});
export default styles;
