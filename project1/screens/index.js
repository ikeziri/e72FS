import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import ThirdTabScreen from './ThirdTabScreen';
import PushedScreen from './PushedScreen';
// import QrCode from './QrCode';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('example.ThirdTabScreen', () => ThirdTabScreen);
  Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
  // Navigation.registerComponent('example.QrCode', () => QrCode);
}