import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login} from "./src/screen/Login";
import BottomTabNav from './src/navigations/BottomTabNav';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
    const [storedToken, setStoredToken] = useState('');

    useEffect(() => {
        loadToken();
        console.log('token',storedToken);
    }, []);

    const loadToken = async () => {
        try {
            const storedToken = await AsyncStorage.getItem('jwtToken');
            if (storedToken !== null) {
                console.log('Token loaded successfully:', storedToken);
            }
        } catch (error) {
            console.error('Error loading token:', error);
        }
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='BottomTabNav'>
                {storedToken.length === 0  ? (
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                ) : (
                    <Stack.Screen
                        name='BottomTabNav'
                        component={BottomTabNav}
                        options={{
                            headerShown: false,
                        }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
