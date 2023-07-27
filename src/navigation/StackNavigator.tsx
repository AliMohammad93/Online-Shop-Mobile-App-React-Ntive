import * as React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import Product from '../screens/products/SingleProduct/Product';
import MaterialTopTabs from './MaterialTopTabs/MaterialTopTabs';
import CustomHeader from './MaterialTopTabs/CustomHeader';
import { StackNavigatorParamList } from "./types";
const Stack = createStackNavigator<StackNavigatorParamList>();
const StackNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MaterialTopTabs}
          options={{header: () => <CustomHeader />}}
        />
        <Stack.Screen name="Product" component={Product} />

      </Stack.Navigator>
  );
};
export default StackNavigator;
