import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './RootNavigation';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
