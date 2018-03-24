import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import DefaultButton from '../../components/UI/Button/DefaultButton';

class AuthScreen extends Component {

  loginHandler = () => {
    // TODO:  Aquí debe ir la consulta a DB para el Login
    startMainTabs();
  }

  render () {
    return(
      <View style={styles.container}>
          <MainText>
            <HeadingText>Bienvenido</HeadingText>
          </MainText>
          
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Username" style={styles.input} />
            <DefaultInput placeholder="Password" style={styles.input} />
            <DefaultInput placeholder="Confirm Password" style={styles.input} />
          </View>
          <DefaultButton onPress={this.loginHandler}>Iniciar Sesión</DefaultButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb'
  },
});

export default AuthScreen;
