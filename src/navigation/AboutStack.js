import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AboutScreen } from '../screens/AboutScreen';
import { THEME } from '../theme';

const Stack = createStackNavigator();

const AboutStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: THEME.MAIN_COLOR,
				},
				headerTintColor: 'white',
			}}
		>
			<Stack.Screen name='About' component={AboutScreen} />
		</Stack.Navigator>
	);
};

export default AboutStack;
