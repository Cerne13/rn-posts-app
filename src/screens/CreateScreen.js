import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Image,
	Button,
	ScrollView,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { addPost } from '../store/actions/postActions';
import { THEME } from '../theme';

export const CreateScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [text, setText] = useState('');

	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
					<Item
						title='Toggle drawer'
						iconName='ios-menu'
						onPress={() => navigation.toggleDrawer()}
					/>
				</HeaderButtons>
			),
		});
	}, [navigation]);

	const img =
		'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg';

	const saveHandler = () => {
		const post = {
			date: new Date().toJSON(),
			text,
			img,
			booked: false,
		};
		dispatch(addPost(post));
		navigation.navigate('Main');
	};

	return (
		<ScrollView>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.wrapper}>
					<Text style={styles.title}>
						Do you dare to create a new post?
					</Text>
					<TextInput
						style={styles.textarea}
						placeholder='Enter your text'
						value={text}
						onChangeText={setText}
						multiline
					/>
					<Image
						style={{
							width: '100%',
							height: 200,
							marginVertical: 20,
						}}
						source={{
							uri: img,
						}}
					/>
					<Button
						title='Create post'
						color={THEME.MAIN_COLOR}
						onPress={saveHandler}
					/>
				</View>
			</TouchableWithoutFeedback>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		padding: 10,
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 'bold',
		marginVertical: 10,
	},
	textarea: {
		padding: 10,
		marginBottom: 10,
	},
});
