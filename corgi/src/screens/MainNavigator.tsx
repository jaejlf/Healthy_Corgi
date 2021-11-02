import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./Login"
import Navigator from './Navigator';

const Stack = createStackNavigator();

export default function MainNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name = "Login" component={Login}/>
            <Stack.Screen name = "inApp" component={Navigator}/>
        </Stack.Navigator>
    );
}