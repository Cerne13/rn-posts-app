import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CreateScreen } from '../screens/CreateScreen';
import { THEME } from '../theme';

const Stack = createStackNavigator();

const CreateStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: THEME.MAIN_COLOR,
				},
				headerTintColor: 'white',
			}}
		>
			<Stack.Screen name='Create' component={CreateScreen} />
		</Stack.Navigator>
	);
};

export default CreateStack;
