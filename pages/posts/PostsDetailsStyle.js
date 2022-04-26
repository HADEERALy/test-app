import Colors from '../../constants/Colors';
import {calcHeight, calcWidth} from '../../constants/Dimension';
import Styles from '../../constants/Styles';
import {StyleSheet} from 'react-native';
import Window from '../../constants/Layout';
const width = Window.window.width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkBlue,
  },
  backGround_container: {
    flex: 1,
  },
  backgroundImage: {
    height: calcHeight(500),
    width: calcWidth(300),
  },
  icons: {
    ...Styles.flexRow_between,
    paddingTop: 40,
    paddingLeft: 25,
    paddingRight: 25,
  },
  icons2: {
    ...Styles.flexRow_between,
    paddingTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  secPart: {
    flex: 1,
    backgroundColor: Colors.darkBlue,
    height: '100%',
  },
  descrp_container: {
    // backgroundColor: 'red',
    width: '85%',
    alignSelf: 'center',
  },
  btn: {
    width: calcWidth(140),
    height: calcHeight(43),
    borderRadius: 25,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_text: {
    ...Styles.mediumText,
    fontSize: calcWidth(14),
    color: Colors.white,
  },
  descrp: {
    ...Styles.lightText,
    fontSize: calcWidth(15),
    color: Colors.white,
    paddingTop: calcHeight(20),
    lineHeight: calcHeight(25),
  },
  item_container: {
    width: width / 4,
    borderColor: '#E0E0E0',
    // borderWidth: 1,
    // borderRadius: 15,
    padding: 20,
    marginTop: calcHeight(10),
    marginBottom: calcHeight(30),
    height: calcHeight(150),
  },
  actor_image: {
    height: calcHeight(70),
    width: calcWidth(70),
    borderRadius: calcWidth(70) / 2,
    alignSelf: 'center',
  },
  actor_name: {
    ...Styles.lightText,
    textAlign: 'center',
    fontSize: calcWidth(14),
    color: Colors.white,
    paddingTop: calcHeight(15),
  },
  studio_container: {
    flexDirection: 'row',
    paddingLeft: calcWidth(35),
    paddingBottom: calcHeight(15),
  },
  studio: {
    ...Styles.mediumText,
    fontSize: calcWidth(18),
    color: Colors.white,
    paddingRight: calcWidth(30),
  },
  studio_title: {
    ...Styles.lightText,
    fontSize: calcWidth(18),
    color: Colors.white,
  },
  rating_container: {
    paddingTop: calcHeight(10),
  },
});
export default styles;
