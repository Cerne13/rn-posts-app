import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { Post } from './Post';

export const PostList = ({ data, onOpen }) => {
	if (!data.length) {
		return (
			<View style={styles.wrapper}>
				<Text style={styles.noItems}>There are no posts yet</Text>
			</View>
		);
	}

	return (
		<View style={styles.wrapper}>
			<FlatList
				data={data}
				keyExtractor={(post) => post.id.toString()}
				renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		padding: 10,
	},
	noItems: {
		fontSize: 18,
		textAlign: 'center',
		marginTop: 20,
		fontWeight: 'bold',
	},
});
