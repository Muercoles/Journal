import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login} from "./src/screen/Login";
import profile from './src/screen/User/profile';
import BottomTabNav from './src/navigations/BottomTabNav';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='BottomTabNav'>
          <Stack.Screen
              name='BottomTabNav'
              component={BottomTabNav}
              options={{
                headerShown: false,
              }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
