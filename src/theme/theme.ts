import { horizontalScale, verticalScale, moderateScale } from "./metrics";
import { Theme } from "./types";
const theme: Theme = {
  colors: {
    primary: "#4682d8",
    secondary: "#333333",
    background: "#eeeeee",
    white: "#FFFFFF",
    red:'#fc575b'
  },
  spaceX: {
    xs: horizontalScale(4),
    sm: horizontalScale(8),
    md: horizontalScale(16),
    lg: horizontalScale(24),
    xl: horizontalScale(40)
  },
  spaceY: {
    xs: verticalScale(4),
    sm: verticalScale(8),
    md: verticalScale(16),
    lg: verticalScale(24),
    xl: verticalScale(40)
  },

  typography: {
    h1: {
      fontSize: moderateScale(32),
      fontWeight: "bold",
      fontFamily:'MavenPro'
    },
    h2: {
      fontSize: moderateScale(24),
      fontWeight: "bold",
      fontFamily:'MavenPro'
    },
    h3: {
      fontSize: moderateScale(18),
      fontWeight: "bold",
      fontFamily:'MavenPro'
    },
    body: {
      fontSize: moderateScale(14),
      fontFamily:'MavenPro'
    },
    caption: {
      fontSize: moderateScale(12),
      fontFamily:'MavenPro'
    }
  },
  scaling: {
    horizontalScale,
    verticalScale,
    moderateScale
  }
};

export default theme;
