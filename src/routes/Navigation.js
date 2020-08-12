import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StackNavigator from './StackNavigation';

const { Navigator, Screen } = createStackNavigator();

function  AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Stack" component={StackNavigator} />
    </Navigator>
  )
}

export default AppNavigation;
