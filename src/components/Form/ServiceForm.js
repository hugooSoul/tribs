import React, { Component } from 'react';
import { StyleSheet, View, Text, DatePickerIOS } from 'react-native';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import TimePickerDefault from '../../components/UI/TimePicker/TimePicker';
import SelectInput from '../../components/UI/SelectInput/SelectInput';
import PickImage from '../PickImage/PickImage';

class ServiceForm extends Component {

  state = {
    image: {
      value: null,
      valid: false
    }
  }

  imagePickedHandler = image => {
    this.setState(prevState => {
      return {
        image: {
          ...prevState.image,
          image: {
            value: image,
            valid: true
          }
        }
      };
    });
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

        <SelectInput nameInput={"¿Termino?"} />

        <PickImage onImagePicked={this.imagePickedHandler} />
      </View>
    );
  }
};

const styles = StyleSheet.create({

});

export default ServiceForm;
