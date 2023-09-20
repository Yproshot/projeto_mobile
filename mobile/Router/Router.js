import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import Home from '../Screen/Home/Home';

const Stack = createStackNavigator();

export default function Router() {

    return(
        <NavigationContainer initialRouteName='Home'>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}