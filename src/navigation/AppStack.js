import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';

const App = createStackNavigator();

const AppStack = () => {
	return (
		<App.Navigator
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
			<App.Screen
				name='Main'
				component={MainScreen}
				options={{
					headerTitle: 'Main page',
				}}
			/>
			<App.Screen
				name='Post'
				component={PostScreen}
				options={({ route }) => ({
					headerTitle:
						'Post from ' +
						new Date(route.params.postDate).toLocaleDateString(),
				})}
			/>
		</App.Navigator>
	);
};

export default AppStack;
