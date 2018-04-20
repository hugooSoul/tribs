import React, { Component } from 'react';
import { StyleSheet, View, Text, DatePickerIOS, Button } from 'react-native';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import TimePickerDefault from '../../components/UI/TimePicker/TimePicker';
import SelectInput from '../../components/UI/SelectInput/SelectInput';
import PickImage from '../PickImage/PickImage';

class ServiceForm extends Component {

  constructor(props) {
    super(props);

    this.addButton = this.addButton.bind(this);
    this.state = {
      data: []
    }
  }

  addButton() {
    let newly_added_data = { title: 'new title', content: 'new content goes here' };

    this.setState({
        data: [...this.state.data, newly_added_data]
    });
  }

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

    let added_buttons_goes_here = this.state.data.map( (data, index) => {
      return (
        <PickImage key={index} onImagePicked={this.imagePickedHandler} />
      )
    });

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
        {added_buttons_goes_here}

        <Button title="Add more" onPress={this.addButton} style={styles.button} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    height:60,
    backgroundColor: '#ededed',
    marginTop:10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ServiceForm;
