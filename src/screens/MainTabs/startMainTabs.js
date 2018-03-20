import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = () => {

  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30),
    Icon.getImageSource("ios-menu", 30)
  ]).then(sources => {

    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.AppointmentsScreen",
          label: "Pending Appointments",
          title: "Citas Pendientes",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "awesome-places.AppointmentsDoneScreen",
          label: "Appointments Done",
          title: "Citas Cerradas",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: "awesome-places.SideDrawerScreen"
        }
      }
    });

  });

};

export default startMainTabs;
