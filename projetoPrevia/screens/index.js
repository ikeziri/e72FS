import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import ThirdTabScreen from './ThirdTabScreen';
import PushedScreen from './PushedScreen';
import Drawer from './Drawer';
import Login from './Login';
import Andre from './Andre';
import PA from './PA';
import Lorran1 from './Lorran1';
import Lorran2 from './Lorran2';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('example.ThirdTabScreen', () => ThirdTabScreen);
  Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
  Navigation.registerComponent('example.Drawer', () => Drawer);
  Navigation.registerComponent('example.Login', () => Login);
  Navigation.registerComponent('example.Andre', () => Andre);
  Navigation.registerComponent('example.PA', () => PA);
  Navigation.registerComponent('example.Lorran1', () => Lorran1);
  Navigation.registerComponent('example.Lorran2', () => Lorran2);
}