import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { BookmarkedScreen } from '../screens/BookmarkedScreen';
import { MainScreen } from '../screens/MainScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';

const Stack = createStackNavigator();

const AppStack = () => {
	return (
		<Stack.Navigator
			initialRouteName='Main'
			screenOptions={{
				headerStyle: {
					backgroundColor:
						Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
				},
				headerTintColor:
					Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR,
			}}
		>
			<Stack.Screen
				name='Main'
				component={MainScreen}
				options={{ headerTitle: 'Main page' }}
			/>
			<Stack.Screen
				name='Post'
				component={PostScreen}
				options={({ route }) => ({
					headerTitle:
						'Post from ' +
						new Date(route.params.postDate).toLocaleDateString(),
					headerStyle: { backgroundColor: 'green' },
				})}
			/>
		</Stack.Navigator>
	);
};

export default AppStack;
