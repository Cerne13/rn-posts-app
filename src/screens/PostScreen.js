import React, { useEffect } from 'react';
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
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { DATA } from '../data';
import { THEME } from '../theme';

export const PostScreen = ({ route, navigation }) => {
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
						onPress={() => console.log('Pressed booked icon')}
					/>
				</HeaderButtons>
			),
		});
	}, [navigation]);

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
	title: {
		// fontFamily: 'open-regular',
	},
});
