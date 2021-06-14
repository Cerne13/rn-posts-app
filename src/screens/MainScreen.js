import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useEffect } from 'react/cjs/react.development';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

import { DATA } from '../data';
import { PostList } from '../components/PostList';

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
						onPress={() => navigation.toggleDrawer()}
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

	return <PostList data={DATA} onOpen={openPostHandler} />;
};
