import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AboutScreen } from '../screens/AboutScreen';
import { CreateScreen } from '../screens/CreateScreen';

import TabStack from './TabStack';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name='Main' component={TabStack} />
			<Drawer.Screen name='About' component={AboutScreen} />
			<Drawer.Screen name='Create' component={CreateScreen} />
		</Drawer.Navigator>
	);
};

export default MainNavigator;
