import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { connect } from 'react-redux';
import AppointmentList from '../../components/AppointmentList/AppointmentList';

const appointments = [
  {
    key: 0, // ID must to be here as a "key" to avoid the warning
    name: "Hugo Mandujano",
    address: "Dirección",
    phone: "123456789",
    status: true
  },
  {
    key: 1,
    name: "Julio Cesar",
    address: "Mty, NL",
    phone: "123456789",
    status: true
  }
]

class AppointmentsDoneScreen extends Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {

    console.log(event);
    if (event.type == 'NavBarButtonPress') {
      if(event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left',
          animated: true
        });
      }
    }

  }

  itemSelectedHandler = key => {
    const selCustomer = appointments.find(customer => {
      return customer.key === key;
    });

    this.props.navigator.push({
      screen: "awesome-places.DoneAppointmentsScreen",
      title: selCustomer.name,
      passProps: {
        selectedPlace: selCustomer
      }
    });

  }

  render () {
    return(
      <View>
        <AppointmentList appointments={appointments} onItemSelected={this.itemSelectedHandler} />
      </View>
    );
  }
}


export default AppointmentsDoneScreen;
