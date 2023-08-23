import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../ecrans/Home';
import ButtomTabs from '../ecrans/tabs';


const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
   <NavigationContainer>
       <Stack.Navigator  initialRouteName='home' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={ButtomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes