import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './SplashStyle';
const Splash = () => {
  const {navigate} = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate('Home');
    }, 2000);
  }, []);
  return (
    <View style={styles.img_container}>
      <Image
        source={require('../../assets/imgs/disneyland.jpg')}
        resizeMode={'cover'}
        style={styles.img}
      />
    </View>
  );
};

export default Splash;
