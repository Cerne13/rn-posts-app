import React, { useState } from 'react';
import { View, StyleSheet, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

async function askPermissions() {
	const { status } = await Permissions.askAsync(
		Permissions.CAMERA,
		Permissions.MEDIA_LIBRARY
	);

	if (status !== 'granted') {
		Alert.alert(
			'Error',
			'You have not granted the app rights to use the camera'
		);
		return false;
	}
	return true;
}

export const PhotoPicker = ({onPick}) => {
	const [image, setImage] = useState(null);
	const takePhoto = async () => {
		const hasPermissions = await askPermissions();

		if (!hasPermissions) {
			return;
		}

		const img = await ImagePicker.launchCameraAsync({
			quality: 0.7,
			allowsEditing: false,
			aspect: [16, 9],
		});

		setImage(img.uri);
        onPick(img.uri);
	};

	return (
		<View style={styles.wrapper}>
			<Button title='Make photo' onPress={takePhoto} />
			{image && <Image source={{ uri: image }} style={styles.image} />}
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		marginBottom: 10,
	},
	image: {
		width: '100%',
		height: 200,
		marginTop: 10,
	},
});
