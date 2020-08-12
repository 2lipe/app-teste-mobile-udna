import React from 'react';
import { View, Text } from 'react-native';

export default class ServiceDetail extends React.Component {
  render() {
    const { route } = this.props;
    
    return (
      <View>
        <Text>{ route.params.service.title }</Text>
      </View>
    )
  }
}
