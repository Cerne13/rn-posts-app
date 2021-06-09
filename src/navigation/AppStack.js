import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

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
				options={{
					headerTitle: 'Main page',
				}}
			/>
			<Stack.Screen
				name='Post'
				component={PostScreen}
				options={({ route }) => ({
					headerTitle:
						'Post from ' +
						new Date(route.params.postDate).toLocaleDateString(),
				})}
			/>
		</Stack.Navigator>
	);
};

export default AppStack;
