
import { Navigation } from 'react-native-navigation';
import Feed from './src/components/Feed/Feed';
import { name as appName } from './app.json';
import Login from './src/components/Login/Login';
import { AsyncStorage } from 'react-native';

Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Feed', () => Feed);

AsyncStorage.getItem('token')
  .then(token => {

    if (token) {
      return {
        screen: 'Feed',
        title: 'Instalura',
      };
    }

    return {
      screen: 'Login',
      title: 'Login',
    };
  })
  .then(screen => Navigation.startSingleScreenApp({ screen }));
