import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CATALOGUE_VIEW, DETAIL_VIEW, FAVORITE_VIEW, HOME_VIEW, TIME_LINE_VIEW } from './types';

import HomeView from '@screens/app/home';
import TimeLineView from 'screens/app/timeLine';
import CatalogueView from 'screens/app/catalogue';
import DetailView from 'screens/app/detail';
import FavoriteView from 'screens/app/favorites';

export interface INavigateMethod {
	screen: string
	params?: object
}

const Stack = createStackNavigator();

export default function Router() {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none" initialRouteName={HOME_VIEW}>
				<Stack.Screen name={HOME_VIEW} component={HomeView} />
				<Stack.Screen name={TIME_LINE_VIEW} component={TimeLineView} />
				<Stack.Screen name={CATALOGUE_VIEW} component={CatalogueView} />
				<Stack.Screen name={FAVORITE_VIEW} component={FavoriteView} />
				<Stack.Screen name={DETAIL_VIEW} component={DetailView} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}