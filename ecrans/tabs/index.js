import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import Message from '../Message';
import Setting from '../Setting';

const Tab = createMaterialBottomTabNavigator();
const ButtomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="tabs_home"
      activeColor="blue"
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
          //tabBarBadge:1,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Setting}
        options={{
          tabBarLabel: 'Paramètre',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-settings-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default ButtomTabs