import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const CreateScreen = (props) => {
	return (
		<View style={styles.center}>
			<Text>CreateScreen</Text>
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
