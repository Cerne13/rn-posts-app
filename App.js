import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/AppNavigation';

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
			<MainNavigator />
		</NavigationContainer>
	);
}
