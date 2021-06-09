import 'react-native-gesture-handler';
import React, { useState } from 'react';

import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { bootstrap } from './src/bootstrap';
import AppStack from './src/navigation/AppStack';

export default function App() {
	// const [isReady, setIsReady] = useState(false);

	// if (!isReady) {
	// 	return (
	// 		<AppLoading
	// 			startAsync={bootstrap}
	// 			onFinish={() => setIsReady(true)}
	// 			onError={(err) => console.log(err)}
	// 		/>
	// 	);
	// }

	return (
		<NavigationContainer>
			<AppStack />
		</NavigationContainer>
	);
}