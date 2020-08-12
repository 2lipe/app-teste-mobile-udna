import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },

  image: {
    aspectRatio: 1,
    borderRadius: 4,
    resizeMode: 'cover'
  },

  textContainer: {
    marginTop: 20,
  },

  price: {
    fontFamily: 'Archivo_700Bold',
    color: '#04d361',
    fontSize: 20,
  },

  priceValue: {
    fontFamily: 'Poppins_400Regular',
    color: '#6a6180',
    fontSize: 18,
  },

  description: {
    marginTop: 10,
    fontFamily: 'Poppins_400Regular',
    color: '#6a6180',
    fontSize: 16,
  },

  bold: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 17,
  },

  button: {
    marginVertical: 20,
    backgroundColor: '#04d361',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  textButton: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 20,
  },

});

export default styles;
