
import {AppRegistry} from 'react-native';
import Feed from './src/components/Feed/Feed';
import {name as appName} from './app.json';
import Login from './src/components/Login/Login';

AppRegistry.registerComponent(appName, () => Feed);
