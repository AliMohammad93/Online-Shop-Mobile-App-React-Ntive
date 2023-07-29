import {StyleSheet} from 'react-native';
import theme from '../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: theme.colors.white,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: theme.scaling.verticalScale(250),
  },
  title: {
    marginBottom: theme.spaceY.md,
    ...theme.typography.body,
    fontWeight: 'bold',
    color: theme.colors.secondary,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: theme.spaceX.sm,
    backgroundColor: theme.colors.background,
    borderRadius: theme.scaling.moderateScale(20),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
  },
  descriptionContainer: {
    backgroundColor: theme.colors.background,
    borderTopStartRadius: theme.scaling.moderateScale(20),
    borderTopEndRadius: theme.scaling.moderateScale(20),
    paddingHorizontal: theme.spaceX.lg,
    paddingVertical: theme.spaceY.lg,
  },
  priceContainer: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.primary,
    width: theme.scaling.horizontalScale(75),
    paddingHorizontal: theme.scaling.horizontalScale(5),
    paddingVertical: theme.scaling.verticalScale(10),
    alignItems: 'center',
    marginRight: theme.scaling.horizontalScale(-24),
    borderTopLeftRadius: theme.scaling.moderateScale(19),
    borderBottomLeftRadius: theme.scaling.moderateScale(19),
  },
  price: {
    color: theme.colors.white,
    ...theme.typography.body,
    fontWeight: 'bold',
  },
  descriptionTitle: {
    ...theme.typography.body,
    marginBottom: theme.spaceY.sm,
    fontWeight: 'bold',
    color: theme.colors.secondary,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.secondary,
  },
  buttonContainer: {
    marginTop: theme.spaceY.lg,
    alignItems: 'center',
  },
});

export default styles;
