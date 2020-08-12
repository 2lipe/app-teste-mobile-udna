import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 10,
    height: Dimensions.get('window').width / 2,
  },

  card: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 4,
  },

  cardTitleWrapper: {
    backgroundColor: '#ffb14d',
    height: 50,
    position: 'absolute',

    bottom: 0,
    opacity: .8,
    width: '100%',

    paddingTop: 10,
    paddingBottom: 10,

    paddingLeft: 3,
    paddingRight: 3,

    alignItems: 'center',
  },

  cardTitle: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 15
  },
});

export default styles;
