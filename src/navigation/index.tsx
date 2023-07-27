import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from "./StackNavigator";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
