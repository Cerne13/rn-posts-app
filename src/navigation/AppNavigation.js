import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabStack from './TabStack';
import AboutStack from './AboutStack';
import CreateStack from './CreateStack';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name='Main' component={TabStack} />
			<Drawer.Screen name='About' component={AboutStack} />
			<Drawer.Screen name='Create' component={CreateStack} />
		</Drawer.Navigator>
	);
};

export default MainNavigator;
