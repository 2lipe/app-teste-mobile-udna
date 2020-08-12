import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import Home from '../pages/Home';
import ServiceDetail from '../pages/ServicesDetails';

const { Navigator, Screen } = createStackNavigator();

function StackNavigator() {

  const headerStyles = {
    title: 'Udna',
    headerStyle: {
      backgroundColor: '#593d88',
    },
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: '#FFF',
      fontSize: 30,
      fontFamily: 'Poppins_600SemiBold',
    },
    headerTintColor: '#FFF',
  }

  return (
    <Navigator>
      <Screen
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Screen
        name="Login"
        component={LoginPage}
        options={headerStyles}
      />
      <Screen 
        name="Register"
        component={RegisterPage}
        options={headerStyles}
      />
      <Screen 
        name="Home"
        component={Home}
        options={headerStyles}
      />
      <Screen
        name="ServiceDetail"
        component={ServiceDetail}
        options={({route}) => ({
          title: route.params.service.title,
          headerStyle: {
            backgroundColor: '#593d88',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#FFF',
            fontSize: 19,
            fontFamily: 'Poppins_600SemiBold',
          },
          headerTintColor: '#FFF',
        })}
      />
    </Navigator>
  )

}

export default StackNavigator;
