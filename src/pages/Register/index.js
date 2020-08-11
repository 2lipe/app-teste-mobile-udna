import React from 'react';
import {
  View,
  TextInput,
  ActivityIndicator,
  Text,
  YellowBox,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import firebase from '../../database/firebase';

import FormRow from '../../components/FormRow';

import styles from './styles';

YellowBox.ignoreWarnings(['Setting a timer']);

export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: '',
      password: '',
      isLoading: false,
      message: '',
    }
  }

  handleOnChangeTextInput(field, value) {
    this.setState({ [field] : value });
  }

  async handleTryRegister() {
    this.setState({ isLoading: true });
    const { mail, password } = this.state;

    const registerUserSuccess = () => {
      this.setState({ message: 'Cadastro realizado com sucesso.' });
    }

    const registerUserFaillure = e => {
      this.setState({ 
        message: this.getMessageByErrorCode(e.code) 
      });
      console.log(e)
    }

    await firebase
     .auth()
     .createUserWithEmailAndPassword(mail, password)
     .then(registerUserSuccess)
     .catch(registerUserFaillure)
     .then(() => this.setState({ isLoading: false }))
    ;
  }

  getMessageByErrorCode(errorCode) {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'Email já cadastrado.';
      case 'auth/invalid-email':
        return 'Email inválido.';
      case 'auth/weak-password':
        return 'Senha fraca.'
      default:
        return 'Erro desconhecido';
    }
  }

  renderButton() {
    if (this.state.isLoading) 
      return <ActivityIndicator />;

    return (
      <RectButton 
        style={styles.button}
        onPress={() => this.handleTryRegister()}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </RectButton>
    )
  }

  renderMsg() {
    const { message } = this.state;
    if (!message) null

    return (
      <View>
        <Text>{message}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Faça seu cadastro.</Text>
        {this.renderMsg()}
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder="user@mail.com"
            value={this.state.mail}
            onChangeText={value => this.handleOnChangeTextInput('mail', value)}
          />
        </FormRow>
        <FormRow last >
          <TextInput
            style={styles.input}
            placeholder="******"
            secureTextEntry
            value={this.state.password}
            onChangeText={value => this.handleOnChangeTextInput('password', value)}
          />
        </FormRow>
        {this.renderButton()}
      </View>
    )
  }

}
