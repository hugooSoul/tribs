import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';
//import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';

class DoneAppointmentsScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.title}>Dirección:</Text>
          <Text>{this.props.selectedPlace.address}</Text>
        </View>
        <View style={styles.phoneContainer}>
          <Text style={styles.title}>Teléfono:</Text>
          <Text>{this.props.selectedPlace.phone}</Text>
        </View>
        <View>
          <Text style={styles.title}>Esta cita ya fue cerrada.</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    marginRight: 22,
    marginLeft: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24
  },
  title: {
    fontWeight: 'bold'
  },
  addressContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  phoneContainer: {
    marginBottom: 20,
  }
});

export default DoneAppointmentsScreen;
