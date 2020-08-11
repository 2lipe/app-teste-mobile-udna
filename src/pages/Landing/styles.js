import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#593d88',
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '50%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#FFF',
    fontSize: 25,
    lineHeight: 30,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 35,
    justifyContent: 'space-between',
  },

  button: {
    height: 80,
    width: '48%',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },

  buttonPrimary: {
    backgroundColor: '#9871f5',
  },

  buttonSecondary: {
    backgroundColor: '#04d361',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 19,
    alignSelf: 'center',
  },

})

export default styles;
