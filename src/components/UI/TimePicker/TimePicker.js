import React, { Component } from 'react';
import { StyleSheet, View, Text, DatePickerIOS, TouchableOpacity } from 'react-native';

var moment = require('moment');

class TimePickerDefault extends Component {

  constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            showDatePicker: false
        }
    }

  render() {
        var showDatePicker = this.state.showDatePicker ?
            <DatePickerIOS
                style={{ height: 150 }}
                date={this.state.date} onDateChange={(date)=>this.setState({date})}
                mode="time"/> : <View />
        return (
            <View style={styles.pickerContainer}>
                <Text>{this.props.nameInput}</Text>
                <TouchableOpacity style={styles.input}
                                  onPress={() => this.setState({showDatePicker: !this.state.showDatePicker})}>
                    <Text>{moment(this.state.date).format('h:mm a')}</Text>
                </TouchableOpacity>
                {showDatePicker}
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

export default TimePickerDefault;
