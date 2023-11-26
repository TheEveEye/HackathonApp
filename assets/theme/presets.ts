import { StyleSheet } from 'react-native';
import { fonts } from './fonts';
import { colors } from './color';


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#101010',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#fff',
  },
  text: {
    fontSize: 20,
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 80,
  },
  box: {
    backgroundColor: "#282828",
    borderColor: "#ffc300",
    borderWidth: 3,
    borderRadius: 10,
  },
  inputField: {
    width: '100%',
    height: 50,
    backgroundColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 20,
    marginVertical: 10,
    borderColor: "#969696",
    borderWidth: 2,
  },
  button: {
    alignSelf: 'center',
    width: '60%',
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 10,
    fontSize: 20,
    borderColor: colors.primaryHighlight,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  IDENTIFY: {
    borderColor: "#FF0000",
    borderWidth: 5,
  },
});