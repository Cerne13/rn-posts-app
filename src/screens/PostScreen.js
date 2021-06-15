import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	View,
	Text,
	StyleSheet,
	Image,
	Button,
	ScrollView,
	Alert,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LogBox } from 'react-native';

import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { DATA } from '../data';
import { THEME } from '../theme';
import { toggleBooked } from '../store/actions/postActions';

LogBox.ignoreLogs([
	'Non-serializable values were found in the navigation state',
]);

export const PostScreen = ({ route, navigation }) => {
	const dispatch = useDispatch();

	const postId = route.params.postId;
	const iconName = route.params.booked ? 'ios-star' : 'ios-star-outline';

	const post = DATA.find((p) => p.id === postId);

	// is it better with useEffect or useLayoutEffect???
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
					<Item
						title='Mark as bookmarked'
						iconName={iconName}
						onPress={toggleHandler}
					/>
				</HeaderButtons>
			),
		});
	}, [navigation]);

	const booked = useSelector((state) =>
		state.post.bookedPosts.some((post) => post.id === postId)
	);

	useEffect(() => {
		navigation.setParams({ booked });
	}, [booked]);

	const toggleHandler = useCallback(() => {
		console.log(postId);
		dispatch(toggleBooked(postId));
	}, [dispatch, postId]);

	useEffect(() => {
		navigation.setParams({ toggleHandler });
	}, [toggleHandler]);

	const removeHandler = () => {
		Alert.alert(
			'Post deletion',
			'Do you really want to delete the post?',
			[
				{
					text: 'Cancel',
					style: 'cancel',
				},
				{ text: 'OK', style: 'destructive', onPress: () => {} },
			],
			{ cancelable: false }
		);
	};

	return (
		<ScrollView>
			<Image source={{ uri: post.img }} style={styles.image} />
			<View style={styles.textWrap}>
				<Text style={styles.title}>{route.params.text}</Text>
			</View>
			<Button
				title='Delete'
				color={THEME.DANGER_COLOR}
				onPress={removeHandler}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200,
	},
	textWrap: {
		padding: 10,
	},
});
