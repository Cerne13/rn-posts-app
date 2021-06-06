import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Post } from '../components/Post';
import { DATA } from '../data';

export const MainScreen = ({ navigation }) => {
	const openPostHandler = (post) => {
		navigation.navigate('Post', {
			postId: post.id,
			postDate: post.date,
			img: post.img,
			text: post.text,
		});
	};

	return (
		<View style={styles.wrapper}>
			<FlatList
				data={DATA}
				keyExtractor={(post) => post.id.toString()}
				renderItem={({ item }) => (
					<Post post={item} onOpen={openPostHandler} />
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		padding: 10,
	},
});
