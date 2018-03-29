import React, { Component } from 'react';
import { StyleSheet, View, Text, Picker, TouchableOpacity } from 'react-native';


class SelectInput extends Component {

  constructor(props) {
      super(props);
      this.state = {
          option: "Selecciona una opción",
          showPicker: false
      }
    }

  render() {
        var showPicker = this.state.showPicker ?
        <Picker
          selectedValue={this.state.option}
          onValueChange={(itemValue, itemIndex) => this.setState({option: itemValue})}>
          <Picker.Item label="Si" value="Si" />
          <Picker.Item label="No" value="No" />
        </Picker> : <View />
        return (
            <View style={styles.pickerContainer}>
                <Text>{this.props.nameInput}</Text>
                <TouchableOpacity style={styles.input}
                                  onPress={() => this.setState({showPicker: !this.state.showPicker})}>
                  <Text>{this.state.option}</Text>
                </TouchableOpacity>
                {showPicker}
            </View>
        );
    }
};

const styles = StyleSheet.create({
  pickerContainer: {
    padding: 6,
    margin: 8
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 6,
    margin: 4
  }
});

export default SelectInput;
