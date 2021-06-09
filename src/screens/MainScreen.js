import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useEffect } from 'react/cjs/react.development';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

import { Post } from '../components/Post';
import { DATA } from '../data';

export const MainScreen = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
					<Item
						title='Take photo'
						iconName='ios-camera'
						onPress={() => console.log('Pressed camera icon')}
					/>
				</HeaderButtons>
			),
			headerLeft: () => (
				<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
					<Item
						title='Toggle drawer'
						iconName='ios-menu'
						onPress={() => console.log('Pressed drawer icon')}
					/>
				</HeaderButtons>
			),
		});
	}, [navigation]);

	const openPostHandler = (post) => {
		navigation.navigate('Post', {
			postId: post.id,
			postDate: post.date,
			img: post.img,
			text: post.text,
			booked: post.booked,
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
