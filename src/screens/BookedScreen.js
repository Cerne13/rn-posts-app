import React from 'react';
import { useSelector } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useEffect } from 'react/cjs/react.development';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

import { PostList } from '../components/PostList';

export const BookedScreen = ({ navigation }) => {
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

	const bookedPosts = useSelector((state) => state.post.bookedPosts);

	const openPostHandler = (post) => {
		navigation.navigate('Post', {
			postId: post.id,
			postDate: post.date,
			img: post.img,
			text: post.text,
			booked: post.booked,
		});
	};

	return <PostList data={bookedPosts} onOpen={openPostHandler} />;
};
