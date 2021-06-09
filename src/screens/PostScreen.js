import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	Button,
	ScrollView,
	Alert,
} from 'react-native';
import { THEME } from '../theme';

export const PostScreen = ({ route }) => {
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
			<Image source={{ uri: route.params.img }} style={styles.image} />
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
	title: {},
});
