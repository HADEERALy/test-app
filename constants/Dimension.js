import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';

export const calcWidth = (pixels) => {
  const deviceRatio = (pixels * 100) / 414;
  return wp(deviceRatio);
};

export const calcHeight = (pixels) => {
  const deviceRatio = (pixels * 100) / 896;
  return hp(deviceRatio);
};

export const calcFontWeight = (weight) => {
  return Platform.OS === 'ios' ? `${weight}` : null;
};
export const calcRatio = (target, parent = 375) => {
  let ratio = (target / parent) * 100.0;
  return ratio;
};
