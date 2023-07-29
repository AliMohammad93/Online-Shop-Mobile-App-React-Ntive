import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllProducts from '../../screens/products/AllProducts/AllProducts';
import Jewelery from '../../screens/products/Jewelery/Jewelery';
import WomenClothing from '../../screens/products/WomenClothing/WomenClothing';
import MensClothing from '../../screens/products/MensClothing/MensClothing';
import theme from '../../theme/theme';

const Tab = createMaterialTopTabNavigator();
const MaterialTopTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarGap: 1,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarLabelStyle: {...theme.typography.body},
        tabBarScrollEnabled: true,
        tabBarStyle: {backgroundColor: theme.colors.background},
      })}>
      <Tab.Screen
        name="AllProducts"
        component={AllProducts}
        options={{tabBarLabel: 'Products'}}
      />
      <Tab.Screen
        name="WomenClothing"
        component={WomenClothing}
        options={{tabBarLabel: 'Women Clothing'}}
      />
      <Tab.Screen
        name="MensClothing"
        component={MensClothing}
        options={{tabBarLabel: 'Mens Clothing'}}
      />
      <Tab.Screen name="Jewelery" component={Jewelery} />
    </Tab.Navigator>
  );
};
export default MaterialTopTabs;
