import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import services from '../../assets/other/services.json';
import ServiceCard from '../../components/ServicesCards';

import styles from './styles';

const Home = props => {
  return (  
    <View style={styles.container}>
      <FlatList 
        data={services}
        renderItem={({ item }) => (
          <ServiceCard 
            service={item} 
            onNavigate={
              () => props.navigation
              .navigate('ServiceDetail', { service: item })
            }
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        ListHeaderComponent={props => (
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Nossos serviços.</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <RectButton 
            style={styles.button}
            onPress={() => props.navigation.navigate('Contact')}
          >
            <Text style={styles.buttonText}>Entrar em contato</Text>
          </RectButton>
        )}
      />
    </View>
  )

}

export default Home;
