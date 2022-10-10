import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {BottomNavigator} from '../components';
import {DetailNews, Favorites, Home} from '../pages';

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          elevation: 0, // <-- this is the solution
        },
      }}
      tabBar={props => {
        return <BottomNavigator {...props} />;
      }}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Favorite"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailNews"
        component={DetailNews}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
