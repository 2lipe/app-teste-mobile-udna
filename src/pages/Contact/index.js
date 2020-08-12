import React from 'react';
import {
  View,
  TextInput,
  ActivityIndicator,
  Text,
  YellowBox,
  KeyboardAvoidingView,
} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import FormRow from '../../components/FormRow';

import styles from './styles';

YellowBox.ignoreWarnings(['Setting a timer']);

export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      mail: '',
      phone: '',
      isLoading: false,
      message: '',
    }
  }

  handleOnChangeTextInput(field, value) {
    this.setState({ [field] : value });
  }

  renderButton() {
    if (this.state.isLoading) 
      return <ActivityIndicator />;

    return (
      <RectButton 
        style={styles.button}
        onPress={() => this.handleTryRegister()}
      >
        <Text style={styles.buttonText}>Fazer pedido</Text>
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
      <KeyboardAvoidingView 
        behavior="padding" 
        enabled 
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Entre em contato. {'\n'} 
              <Text>Faça ja o seu pedido!</Text>
            </Text>
            {this.renderMsg()}
            <FormRow>
              <TextInput
                style={styles.input}
                placeholder="nome completo"
                value={this.state.name}
                onChangeText={value => this.handleOnChangeTextInput('mail', value)}
              />
            </FormRow>
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
                placeholder="(xx)xxxxx-xxxx"
                value={this.state.phone}
                onChangeText={value => this.handleOnChangeTextInput('password', value)}
              />
            </FormRow>
            {this.renderButton()}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }

}

