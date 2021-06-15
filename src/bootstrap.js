import * as Font from 'expo-font';
import { DB } from './db';

export async function bootstrap() {
	try {
		await Font.loadAsync({
			'open-bold': require('../assets/fonts/OpenSansBold.ttf'),
			'open-regular': require('../assets/fonts/OpenSansRegular.ttf'),
		});
		await DB.init();
		console.log('Database started...');
	} catch (e) {
		console.log('Error: ', e);
	}
}
