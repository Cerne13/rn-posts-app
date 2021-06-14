import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { THEME } from '../theme';
import AppStack from './AppStack';
import BookedStack from './BookedStack';

const Tab = createMaterialBottomTabNavigator();

const TabStack = () => {
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
				component={BookedStack}
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
export default TabStack;
