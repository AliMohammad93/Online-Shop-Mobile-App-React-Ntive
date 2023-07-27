import { horizontalScale, verticalScale, moderateScale } from './scaling';

type Colors = {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  light: string;
  dark: string;
  muted: string;
  white: string;
  black: string;
};

type Spacing = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

type Typography = {
  h1: { fontSize: number; fontWeight: 'bold' };
  h2: { fontSize: number; fontWeight: 'bold' };
  h3: { fontSize: number; fontWeight: 'bold' };
  body: { fontSize: number };
  caption: { fontSize: number };
};

export type Theme = {
  colors: Colors;
  spacing: Spacing;
  typography: Typography;
};

const theme: Theme = {
  colors: {
    primary: '#007BFF',
    secondary: '#6C757D',
    success: '#28A745',
    danger: '#DC3545',
    warning: '#FFC107',
    info: '#17A2B8',
    light: '#F8F9FA',
    dark: '#343A40',
    muted: '#6C757D',
    white: '#FFF',
    black: '#000',
  },
  spacing: {
    xs: horizontalScale(4),
    sm: horizontalScale(8),
    md: horizontalScale(16),
    lg: horizontalScale(24),
    xl: horizontalScale(40),
  },
  typography: {
    h1: {
      fontSize: moderateScale(32),
      fontWeight: 'bold',
    },
    h2: {
      fontSize: moderateScale(24),
      fontWeight: 'bold',
    },
    h3: {
      fontSize: moderateScale(18),
      fontWeight: 'bold',
    },
    body: {
      fontSize: moderateScale(14),
    },
    caption: {
      fontSize: moderateScale(12),
    },
  },
};

export default theme;
