import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

export default class ServiceDetail extends React.Component {
  render() {
    const { route } = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imgContainer}>
          <Image 
            source={{ uri: route.params.service.img }}
            style={styles.image}
          />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.priceValue}>
              <Text style={styles.price}>R$ </Text>{ route.params.service.price }
            </Text>
            <Text style={styles.description}>
              <Text style={styles.bold}>Descrição: </Text>{ route.params.service.description }
            </Text>
          </View>
          <RectButton 
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Contact')}
          >
            <Text style={styles.textButton}>Pedir</Text>
          </RectButton>
        </View>
      </ScrollView>
    )
  }
}
