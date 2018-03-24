import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';
//import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';

class AppointmentDetailScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          <Text>Formulario aquí...</Text>
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
  buttonDelete: {
    alignItems: "center",
  },
  buttonClose: {
    alignItems: "center",
  }
});

export default AppointmentDetailScreen;
