import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

const ListItem = (props) => (
  <TouchableHighlight onPress={props.onItemPressed}>
    <View style={styles.listItem}>
    <Text>{props.appointmentCustomer}</Text>
    <Text> / </Text>
    <Text>{props.appointmentAddress}</Text>
    <Text> / </Text>
    <Text>{props.appointmentPhone}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginBottom: 4,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    marginRight: 8,
    width: 30,
    height: 30
  }
});

export default ListItem;
