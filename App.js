import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import store from './src/store';
import { bootstrap } from './src/bootstrap';

export default function App() {
	const [isReady, setIsReady] = useState(false);

	if (!isReady) {
		return (
			<AppLoading
				startAsync={bootstrap}
				onFinish={() => setIsReady(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	return (
		<Provider store={store}>
			<NavigationContainer>
				<AppNavigation />
			</NavigationContainer>
		</Provider>
	);
}
