import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import ThirdTabScreen from './ThirdTabScreen';
import PushedScreen from './PushedScreen';
import Drawer from './Drawer';
import Login from './Login';
import Andre from './Andre';
import Andre2 from './Andre2';
import Andre3 from './Andre3';
import PA from './PA';
import Lorran1 from './Lorran1';
import Lorran2 from './Lorran2';
import Camera from './Camera';
import LeitorQrCode from './LeitorQrCode';
import CadastroBasico from './CadastroBasico';
import CadastroPagamento from './CadastroPagamento';
import RecuperarSenha from './RecuperarSenha';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('example.ThirdTabScreen', () => ThirdTabScreen);
  Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
  Navigation.registerComponent('example.Drawer', () => Drawer);
  Navigation.registerComponent('example.Login', () => Login);
  Navigation.registerComponent('example.Andre', () => Andre);
  Navigation.registerComponent('example.Andre2', () => Andre2);
  Navigation.registerComponent('example.Andre3', () => Andre3);
  Navigation.registerComponent('example.PA', () => PA);
  Navigation.registerComponent('example.Lorran1', () => Lorran1);
  Navigation.registerComponent('example.Lorran2', () => Lorran2);
  Navigation.registerComponent('example.Camera', () => Camera);
  Navigation.registerComponent('example.LeitorQrCode', () => LeitorQrCode);
  Navigation.registerComponent('example.CadastroBasico', () => CadastroBasico);
  Navigation.registerComponent('example.CadastroPagamento', () => CadastroPagamento);
  Navigation.registerComponent('example.RecuperarSenha', () => RecuperarSenha);
}