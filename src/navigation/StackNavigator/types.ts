import type {RouteProp} from '@react-navigation/native';
export type StackNavigatorParamList = {
  Home: undefined;
  Product: {
    id: number;
  };
};

export type ProductScreenRouteProp = RouteProp<
  StackNavigatorParamList,
  'Product'
>;
