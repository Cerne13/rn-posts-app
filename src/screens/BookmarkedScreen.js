import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BookmarkedScreen = (props) => {
	return (
		<View style={styles.center}>
			<Text>BookmarkedScreen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
