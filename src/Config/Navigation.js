import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Home from '../Screens/Home';
// import Main from '../Screens/Main';
import Root from '../Screens/Root';
import BloodDonate from '../Screens/BloodDonate';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="BloodDonate" component={BloodDonate} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Main" component={Main} /> */}
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;