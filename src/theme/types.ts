type Colors = {
  primary: string;
  secondary: string;
  background: string;
  white: string;
  red: string;
};

type Spacing = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

type Typography = {
  h1: {fontSize: number; fontWeight: 'bold'; fontFamily: string};
  h2: {fontSize: number; fontWeight: 'bold'; fontFamily: string};
  h3: {fontSize: number; fontWeight: 'bold'; fontFamily: string};
  body: {fontSize: number; fontFamily: string};
  caption: {fontSize: number; fontFamily: string};
};

type Scaling = {
  horizontalScale: (size: number) => number;
  verticalScale: (size: number) => number;
  moderateScale: (size: number) => number;
};

export type Theme = {
  colors: Colors;
  spaceX: Spacing;
  spaceY: Spacing;
  typography: Typography;
  scaling: Scaling;
};
