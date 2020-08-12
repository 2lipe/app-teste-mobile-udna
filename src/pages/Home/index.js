import React from 'react';
import { View, FlatList, Text } from 'react-native';

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
        ListFooterComponent={props => (<View style={styles.marginBottom} />)}
      />
    </View>
  )

}

export default Home;
