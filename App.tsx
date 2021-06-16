import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {useColorScheme} from 'react-native';
import Router from '@router/';
import {store, persistor} from 'store';
import RNBootSplash from 'react-native-bootsplash';
import { useEffect } from 'react';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

	useEffect(()=>{
		RNBootSplash.hide({ fade: true });
	},[])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
