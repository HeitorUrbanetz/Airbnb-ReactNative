import 'react-native-gesture-handler';

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';
import ScreenResults from '../screens/ScreenResults';


const Stack = createStackNavigator();


const Router = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator >
     <Stack.Screen name={'Home'} component={HomeTabNavigator} options={{
             headerShown: false
         }}/>
         <Stack.Screen name={'Destination Search'} component={DestinationSearchScreen} options={{
             title: 'Search your destination',
         }}/>
         <Stack.Screen name={'Guests'} component={GuestsScreen} options={{
             title: 'How many people?'
         }}/> 
         <Stack.Screen name={'Results'} component={ScreenResults} options={{
             
         }}/> 
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;

