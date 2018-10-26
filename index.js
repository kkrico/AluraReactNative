
import { Navigation } from 'react-native-navigation';
import Feed from './src/components/Feed/Feed';
import { name as appName } from './app.json';
import Login from './src/components/Login/Login';

Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Feed', () => Feed);

const screen = {
  screen: 'Login',
  title: 'Instalura - Login'
};

Navigation.startSingleScreenApp({ screen });
