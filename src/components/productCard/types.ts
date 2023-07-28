import { IProduct } from "../../types/productTypes";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParamList } from "../../navigation/StackNavigator/types";

export interface IProductCardProps {
  product: IProduct;
  navigation: StackNavigationProp<StackNavigatorParamList>;
}
