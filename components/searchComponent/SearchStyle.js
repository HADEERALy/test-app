import Styles from '../../constants/Styles';
import {calcWidth} from './../../constants/Dimension';
import Colors from '../../constants/Colors';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  input: {
    paddingLeft: 10,
    width: '90%',
    fontSize: calcWidth(14),
  },
  searchIcon: {
    paddingLeft: 15,
  },

  share: {
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 10,
  },
  searchShadow: {
    ...Styles.cardShadow,
    borderRadius: 20,
    backgroundColor: Colors.lightBlue,
    marginTop: 10,
    paddingRight: 10,
  },
  editShadow: {
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 5,
    shadowColor: '#333333',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  editShadowIos: {
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 5,
    shadowColor: '#333333',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadow: {
    paddingTop: 20,
  },
});
export default styles;
