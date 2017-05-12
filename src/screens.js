/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import Drawer from './modules/global/Drawer';
import Home from './modules/appscreens/Home';
import FirstScreen from './modules/appscreens/FirstScreen';
export function registerScreens(store, Provider) {
        Navigation.registerComponent('app.Drawer', () => Drawer);
    	Navigation.registerComponent('app.Home', () => Home, store, Provider);
        Navigation.registerComponent('app.FirstScreen', () => FirstScreen, store, Provider);
}
