import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const AppointmentList = props => {

  return (
    <FlatList
      style={styles.listContainer}
      data={props.appointments}
      renderItem={(info) => (
        <ListItem
          appointmentCustomer={info.item.name}
          appointmentAddress={info.item.address}
          onItemPressed={() => props.onItemSelected(info.item.key)}
         />
      )}

    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  }
});

export default AppointmentList;
