import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#593d88',
    fontSize: 25,
    alignSelf: 'center',
  },

  input: {
    paddingLeft: 5,
    paddingRight: 5,
  },

  button: {
    marginVertical: 20,
    backgroundColor: '#04d361',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 20,
  },

});

export default styles;
