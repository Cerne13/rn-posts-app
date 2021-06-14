import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';
import { BookedScreen } from '../screens/BookedScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { CreateScreen } from '../screens/CreateScreen';

const Booked = createStackNavigator();

const BookedNav = () => {
	return (
		<Booked.Navigator
			initialRouteName='Booked'
			screenOptions={{
				headerTitle: 'Bookmarked',
				headerStyle: {
					backgroundColor:
						Platform.OS === 'android' ? THEME.DANGER_COLOR : '#fff',
				},
				headerTintColor:
					Platform.OS === 'android' ? 'white' : THEME.DANGER_COLOR,
			}}
		>
			<Booked.Screen name='Booked' component={BookedScreen} />
			<Booked.Screen
				name='Post'
				component={PostScreen}
				options={({ route }) => ({
					headerTitle:
						'Post from ' +
						new Date(route.params.postDate).toLocaleDateString(),
					tabBarIcon: <Ionicons name='ios-albums' size={25} />,
				})}
			/>
		</Booked.Navigator>
	);
};

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

const Tab = createMaterialBottomTabNavigator();

const AppNavigation = () => {
	return (
		<Tab.Navigator
			initialRouteName='Main'
			shifting={true}
			// activeTintColor='green'
			// inactiveTintColor='grey'
			tabBarOptions={{}}
		>
			<Tab.Screen
				name='Main'
				component={AppStack}
				options={{
					tabBarLabel: 'All',
					tabBarIcon: ({ color }) => (
						<Ionicons name='ios-albums' size={25} color={color} />
					),
					tabBarColor: THEME.MAIN_COLOR,
				}}
			/>
			<Tab.Screen
				name='Booked'
				component={BookedNav}
				options={{
					tabBarLabel: 'Bookmarked',
					tabBarIcon: ({ color }) => (
						<Ionicons name='ios-star' size={25} color={color} />
					),
					tabBarColor: THEME.DANGER_COLOR,
				}}
			/>
		</Tab.Navigator>
	);
};

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name='Main' component={AppNavigation} />
			<Drawer.Screen name='About' component={AboutScreen} />
			<Drawer.Screen name='Create' component={CreateScreen} />
		</Drawer.Navigator>
	);
};

export default MainNavigator;
