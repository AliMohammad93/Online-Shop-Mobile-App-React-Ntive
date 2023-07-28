import * as React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import Product from '../../screens/products/SingleProduct/SingleProduct';
import MaterialTopTabs from '../MaterialTopTabs/MaterialTopTabs';
import HomeCustomHeader from '../MaterialTopTabs/CustomHeader/CustomHeader';
import CustomHeader from "./CustomHeader/CustomHeader";
import { StackNavigatorParamList } from "./types";
const Stack = createStackNavigator<StackNavigatorParamList>();
const StackNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{header :()=> <CustomHeader/> }}>
        <Stack.Screen
          name="Home"
          component={MaterialTopTabs}
          options={{header: () => <HomeCustomHeader />}}
        />
        <Stack.Screen name="Product" component={Product} />

      </Stack.Navigator>
  );
};
export default StackNavigator;
