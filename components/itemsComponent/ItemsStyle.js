import {StyleSheet} from 'react-native';
import {calcHeight, calcWidth} from './../../constants/Dimension';

import Window from '../../constants/Layout';
import Styles from '../../constants/Styles';
import Colors from '../../constants/Colors';

const width = Window.window.width;
const styles = StyleSheet.create({
  item_container: {
    width: width / 3.2,
    borderColor: '#E0E0E0',
    // borderWidth: 1,
    // borderRadius: 15,
    marginTop: calcHeight(25),
    height: calcHeight(280),
  },
  item_image: {
    width: calcWidth(125),
    height: calcHeight(210),
    alignSelf: 'center',
    borderRadius: 10,
  },
  item_tile: {
    ...Styles.BoldText,
    color: Colors.white,
    fontSize: calcWidth(12),
    fontFamily: 'Metropolis-Medium',
    marginTop: calcHeight(15),
    // backgroundColor: 'red',
  },
  // TextratingContainer: {flexGrow: 1},
});
export default styles;
