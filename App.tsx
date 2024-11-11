import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StateListScreen from './screens/StateListScreen';
import MapScreen from './screens/MapScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="StateList">
                <Stack.Screen name="StateList" component={StateListScreen} options={{ title: 'States & Population' }} />
                <Stack.Screen name="MapScreen" component={MapScreen} options={{ title: 'State Map' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}