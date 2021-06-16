import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';

import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';
import { loadPosts } from '../store/actions/postActions';

export const MainScreen = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
					<Item
						title='Take photo'
						iconName='ios-camera'
						onPress={() => navigation.push('Create')}
						//TODO: fix later
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

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadPosts());
	}, [dispatch]);

	const allPosts = useSelector((state) => state.post.allPosts);
	const loading = useSelector((state) => state.post.loading);

	if (loading) {
		return (
			<View style={styles.center}>
				<ActivityIndicator />
			</View>
		);
	}

	const openPostHandler = (post) => {
		navigation.navigate('Post', {
			postId: post.id,
			postDate: post.date,
			img: post.img,
			text: post.text,
			booked: post.booked,
		});
	};

	return <PostList data={allPosts} onOpen={openPostHandler} />;
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
