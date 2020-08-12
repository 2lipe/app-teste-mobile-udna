import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './styles'

const ServiceCard = ({ service, onNavigate }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onNavigate}
    >
      <View style={styles.card}>
        <Image 
          source={{
            uri: service.img
          }}
          aspectRatio={1}
          resizeMode="cover"
        />
        <View style={styles.cardTitleWrapper}>
          <Text style={styles.cardTitle}>{service.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ServiceCard;
