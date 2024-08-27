import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Dashboard from '../screens/loanDashboard';
import LoanApplication from '../screens/loanApplication';
import {Platform} from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="LoanApplication" component={LoanApplication} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
