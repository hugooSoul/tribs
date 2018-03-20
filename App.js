import { Navigation } from 'react-native-navigation';
//import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import AppointmentsScreen from './src/screens/Appointments/Appointments';
import AppointmentsDoneScreen from './src/screens/Appointments/AppointmentsDone';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';
//import configureStore from './src/store/configureStore';

//const store = configureStore();

// Register screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);
Navigation.registerComponent("awesome-places.AppointmentsScreen", () => AppointmentsScreen);
Navigation.registerComponent("awesome-places.AppointmentsDoneScreen", () => AppointmentsDoneScreen);
Navigation.registerComponent("awesome-places.SideDrawerScreen", () => SideDrawerScreen);

// Start the App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen',
    title: 'Log In',
    navigatorStyle: {},
    navigatorButtons: {}
  }
});