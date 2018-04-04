import React, { Component } from 'react';
import { View, Image, Button, StyleSheet, TextInput} from 'react-native';
import ImagePicker from 'react-native-image-picker';

class PickImage extends Component {

  state = {
    pickedImage: null
  }

  pickImageHanlder = () => {
    ImagePicker.showImagePicker({title: "Elegir Foto"}, res => {
      if(res.didCancel) {
        console.log("User cancelled!");
        alert("User cancelled!");
      } else if (res.error) {
        console.log("Error: ", res.error );
        alert("Error", res.error);
      } else {
        this.setState({
          pickedImage: { uri: res.uri }
        });
        this.props.onImagePicked({uri: res.uri});
      }
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.description}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Descripción: "
              style={styles.input}
              multiline={true}
              numberOfLines={4}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}/>
          </View>
          <View style={styles.placeholder}>
            <Image source={this.state.pickedImage} style={styles.previewImage} />
          </View>
        </View>

        <View style={styles.button}>
          <Button title="Subir Imagen" onPress={ this.pickImageHanlder } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 3,
    margin: 8,
  },
  description: {
    width: '50%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#eee',
    height: 120
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '50%',
    height: 120,
    justifyContent: 'center',
    marginLeft: 2
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: '100%',
    height: '100%'
  },
});

export default PickImage;
