import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';
import {calcHeight, calcWidth} from '../../constants/Dimension';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
  },
  headerContainer: {
    backgroundColor: Colors.blue,
    padding: 50,
    height: calcHeight(260),
  },
  mainHeader: {
    ...Styles.header,
    paddingTop: calcHeight(20),
  },
  secPart: {
    backgroundColor: Colors.darkBlue,
    height: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 30,
  },
  item_title: {
    ...Styles.BoldText,
    fontSize: calcWidth(15),
    color: Colors.white,
  },
  item_title_light: {
    ...Styles.smallLink,
    ...Styles.lightText,
    color: Colors.white,
    paddingTop: calcHeight(4),
  },
});
export default styles;
