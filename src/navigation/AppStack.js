import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

const Stack = createStackNavigator();

const AppStack = () => {
	const iconName = 'ios-star';

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
					headerRight: () => (
						<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
							<Item
								title='Take photo'
								iconName='ios-camera'
								onPress={() =>
									console.log('Pressed camera icon')
								}
							/>
						</HeaderButtons>
					),
					headerLeft: () => (
						<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
							<Item
								title='Toggle drawer'
								iconName='ios-menu'
								onPress={() =>
									console.log('Pressed drawer icon')
								}
							/>
						</HeaderButtons>
					),
				}}
			/>
			<Stack.Screen
				name='Post'
				component={PostScreen}
				options={({ route }) => ({
					headerTitle:
						'Post from ' +
						new Date(route.params.postDate).toLocaleDateString(),
					headerStyle: { backgroundColor: 'green' },
					headerRight: () => (
						<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
							<Item
								title='Mark as bookmarked'
								iconName={iconName}
								onPress={console.log('Pressed camera icon')}
							/>
						</HeaderButtons>
					),
				})}
			/>
		</Stack.Navigator>
	);
};

export default AppStack;
