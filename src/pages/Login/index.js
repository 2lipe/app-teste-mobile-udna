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

export default class LoginPage extends React.Component {
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

  handleTryLogin() {
    this.setState({ isLoading: true });
    const { mail, password } = this.state;

    const loginUserSuccess = () => {
      this.setState({ message: 'Autenticado com sucesso' });
      this.props.navigation.navigate('Home');
    }

    const loginUserFaillure = e => {
      this.setState({
        message: this.getMessageByErrorCode(e.code)
      });
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(mail, password)
      .then(loginUserSuccess)
      .catch(loginUserFaillure)
      .then(() => this.setState({ isLoading: false }))
    ;
  }

  getMessageByErrorCode(errorCode) {
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'Senha incorreta';
      case 'auth/user-not-found':
        return 'Usuário não encontrado';
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
        onPress={() => this.handleTryLogin()}
      >
        <Text style={styles.buttonText}>Entrar</Text>
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
        <Text style={styles.title}>Faça seu login.</Text>
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
