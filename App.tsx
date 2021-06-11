import 'react-native-gesture-handler';

import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import Router from '@router/';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Router />
  );
};

export default App;
