import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from '@screens/app/home';

const Stack = createStackNavigator();

export default function Router() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeView} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}