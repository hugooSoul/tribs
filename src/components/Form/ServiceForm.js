import React, { Component } from 'react';
import { StyleSheet, View, Text, DatePickerIOS } from 'react-native';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import TimePickerDefault from '../../components/UI/TimePicker/TimePicker';

//var moment = require('moment');

class ServiceForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      showDatePicker: false
    };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

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

        <DefaultInput
          placeholder="Termino:"
          value={this.props.placeName}
          onChangeText={this.props.onChangeText} />

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
