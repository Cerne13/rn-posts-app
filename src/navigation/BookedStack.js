import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BookedScreen } from '../screens/BookedScreen';
import { PostScreen } from '../screens/PostScreen';
import { THEME } from '../theme';

const Booked = createStackNavigator();

const BookedStack = () => {
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

export default BookedStack;
