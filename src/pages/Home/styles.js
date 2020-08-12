import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    titleContainer: {
      padding: 20,
    },

    titleText: {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 20,
      color: '#593d88',
    },

    button: {
      marginVertical: 20,
      backgroundColor: '#04d361',
      height: 58,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      marginBottom: 10,
      width: '80%',
      alignSelf: 'center',
    },
  
    buttonText: {
      fontFamily: 'Archivo_700Bold',
      color: '#FFF',
      fontSize: 20,
    },
});

export default styles;
