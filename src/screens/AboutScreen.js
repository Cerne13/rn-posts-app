import React, { useEffect } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { View, Text, StyleSheet } from 'react-native';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const AboutScreen = ({ navigation }) => {
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

	return (
		<View style={styles.center}>
			<Text>Simple prototype for a personal notes app</Text>
			<Text>
				Version <Text style={styles.version}>0.5.1</Text>
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	version: {
		fontWeight: 'bold',
		color: '#8b0000',
	},
});
