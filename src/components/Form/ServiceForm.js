import React, { Component } from 'react';
import { StyleSheet, View, Text, DatePickerIOS } from 'react-native';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import TimePickerDefault from '../../components/UI/TimePicker/TimePicker';
import SelectInput from '../../components/UI/SelectInput/SelectInput';

class ServiceForm extends Component {

  render () {
    return (
      <View>
        <DefaultInput
          placeholder="Atendio:"
          value={this.props.placeName}
          onChangeText={this.props.onChangeText} />

        <DefaultInput
          placeholder="Cliente:"
          value={this.props.customerName}
          onChangeText={this.props.onChangeText} />

        <TimePickerDefault nameInput={"Hora de Llegada"} />

        <TimePickerDefault nameInput={"Hora de Salida"} />

        <SelectInput nameInput={"¿Termino?"} />

        <DefaultInput
          placeholder="Cámara:"
          value={this.props.placeName}
          onChangeText={this.props.onChangeText} />
      </View>
    );
  }
};

const styles = StyleSheet.create({

});

export default ServiceForm;
