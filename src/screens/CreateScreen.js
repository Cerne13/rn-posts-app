import React, { useEffect, useState, useRef } from 'react';
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
import { PhotoPicker } from '../components/PhotoPicker';
import { addPost } from '../store/actions/postActions';
import { THEME } from '../theme';

export const CreateScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [text, setText] = useState('');

	const imgRef = useRef();

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

	const saveHandler = () => {
		const post = {
			date: new Date().toJSON(),
			text,
			img: imgRef.current,
			booked: false,
		};
		dispatch(addPost(post));
		navigation.navigate('Main');
	};

	const photoPickHandler = (uri) => {
		imgRef.current = uri;
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
					<PhotoPicker onPick={photoPickHandler} />
					<Button
						title='Create post'
						color={THEME.MAIN_COLOR}
						onPress={saveHandler}
						disabled={!text}
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
