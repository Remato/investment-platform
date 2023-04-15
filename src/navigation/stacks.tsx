import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../utils/enums';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dashboard, Login, Portfolio, Signup, Trade } from '~/scenes';

const Public = createNativeStackNavigator();
const Private = createBottomTabNavigator();

export const PrivateStack = (): JSX.Element => (
  <Private.Navigator
    initialRouteName={Routes.DASHBOARD}
    screenOptions={{
      headerShown: false,
    }}>
    <Private.Screen
      name={Routes.DASHBOARD}
      component={Dashboard}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
    />
    <Private.Screen
      name={Routes.TRADE}
      component={Trade}
      options={{
        tabBarLabel: 'Trade',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
    />
    <Private.Screen
      name={Routes.PORTFOLIO}
      component={Portfolio}
      options={{
        tabBarLabel: 'Portfolio',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
    />
  </Private.Navigator>
);

export const PublicStack = (): JSX.Element => (
  <Public.Navigator
    initialRouteName={Routes.LOGIN}
    screenOptions={{
      // headerShown: false,
      headerTitle: '',
      contentStyle: { backgroundColor: '#f5f5f5' },
    }}>
    <Public.Screen name={Routes.LOGIN} component={Login} />
    <Public.Screen name={Routes.SIGNUP} component={Signup} />
  </Public.Navigator>
);
