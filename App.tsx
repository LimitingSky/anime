/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import HomeView from '@screens/app/home/HomeScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <HomeView />
  );
};

export default App;
