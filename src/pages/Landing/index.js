import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import backgroundImg from '../../assets/images/background.png';

import styles from './styles';

function Landing() {
  const navigation = useNavigation();

  function handleNavigateToLoginPage() {
    navigation.navigate('Login');
  }

  function handleNavigateToRegisterPage() {
    navigation.navigate('Register');
  }

  return (
    <View style={styles.container}>
      <Image source={backgroundImg} style={styles.banner} />

      <Text style={styles.title}>
        Udna {'\n'}
        <Text style={styles.titleBold}>Uma HealthTech de serviços de Prevenção e Diagnóstico.</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton 
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigateToLoginPage}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>

        <RectButton 
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNavigateToRegisterPage}
        >
          <Text style={styles.buttonText}>Cadastro</Text>
        </RectButton>
      </View>
    </View>
  )
}

export default Landing;
