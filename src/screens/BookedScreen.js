import React from 'react';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useEffect } from 'react/cjs/react.development';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

import { PostList } from '../components/PostList';
import { DATA } from '../data';

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
		<PostList
			data={DATA.filter((post) => post.booked)}
			onOpen={openPostHandler}
		/>
	);
};
