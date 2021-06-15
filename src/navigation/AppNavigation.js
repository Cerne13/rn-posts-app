import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabStack from './TabStack';
import AboutStack from './AboutStack';
import CreateStack from './CreateStack';
import { THEME } from '../theme';

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
	return (
		<Drawer.Navigator
			drawerContentOptions={{
				activeTintColor: THEME.MAIN_COLOR,
				labelStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<Drawer.Screen
				name='Main'
				component={TabStack}
				options={{
					drawerLabel: 'Main screen',
					// drawerIcon: () => <Ionicons name='ios-star' />,
				}}
			/>
			<Drawer.Screen
				name='About'
				component={AboutStack}
				options={{ drawerLabel: 'About the App' }}
			/>
			<Drawer.Screen
				name='Create'
				component={CreateStack}
				options={{ drawerLabel: 'Create post' }}
			/>
		</Drawer.Navigator>
	);
};

export default AppNavigation;
