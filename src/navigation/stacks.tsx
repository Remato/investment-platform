import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../utils/enums';

import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Dashboard, Login, Portfolio, Signup, Trade } from '~/scenes';
import { MainHeader, TradeHeader } from '~/components';

const Public = createNativeStackNavigator();
const Private = createBottomTabNavigator();

export const PrivateStack = (): JSX.Element => (
  <Private.Navigator
    initialRouteName={Routes.DASHBOARD}
    screenOptions={{
      // headerTitle: '',
      // header: () => <MainHeader />,
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#000',
      },
    }}>
    <Private.Screen
      name={Routes.DASHBOARD}
      component={Dashboard}
      options={{
        header: () => <MainHeader />,
        tabBarLabel: 'Dashboard',
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: '#770FDF',
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
        tabBarIcon: ({ color, size }) => (
          <FoundationIcon name="home" color={color} size={size} />
        ),
      }}
    />
    <Private.Screen
      name={Routes.TRADE}
      component={Trade}
      options={{
        header: () => <TradeHeader />,
        tabBarLabel: 'Trade',
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: '#770FDF',
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
        tabBarIcon: ({ color, size }) => (
          <AwesomeIcon name="exchange" color={color} size={size} />
        ),
      }}
    />
    <Private.Screen
      name={Routes.PORTFOLIO}
      component={Portfolio}
      options={{
        header: () => <TradeHeader />,
        tabBarLabel: 'Portfolio',
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: '#770FDF',
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
        tabBarIcon: ({ color, size }) => (
          <FeatherIcon name="pie-chart" color={color} size={size} />
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
      contentStyle: { backgroundColor: '#fff' },
    }}>
    <Public.Screen name={Routes.LOGIN} component={Login} />
    <Public.Screen name={Routes.SIGNUP} component={Signup} />
  </Public.Navigator>
);
