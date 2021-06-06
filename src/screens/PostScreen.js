import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	Button,
	ScrollView,
} from 'react-native';
import { THEME } from '../theme';

export const PostScreen = ({ route }) => {
	console.log(route.params.img);
	return (
		<ScrollView>
			<Image source={{ uri: route.params.img }} style={styles.image} />
			<View style={styles.textWrap}>
				<Text style={styles.title}>{route.params.text}</Text>
			</View>
			<Button title='Delete' color={THEME.DANGER_COLOR} />
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
