import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
//import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';
import ServiceForm from '../../components/Form/ServiceForm';

class ServiceFormScreen extends Component {

  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          <ServiceForm customerName={this.props.selectedPlace.name} />
        </View>
      </ScrollView>
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

export default ServiceFormScreen;
