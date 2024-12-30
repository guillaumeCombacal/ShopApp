// Navigation/Navigation.js

import MainMenu from '../Components/MainMenu'
import FavoriteListPage from '../Components/FavoriteListPage'
import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

//const Stack = createNativeStackNavigator();
const Stack = createBottomTabNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen name="MainMenu"
          component={MainMenu}
          options={{
            title: 'MainMenu',
            tabBarIcon: ({ size }) => {
              return (
                <Image style={{ width: size, height: size }}
                  source={require('../Ressources/shopping-cart-icon.png')} />
              );
            },
          }}
        />
        <Stack.Screen name="FavoriteListPage" component={FavoriteListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;