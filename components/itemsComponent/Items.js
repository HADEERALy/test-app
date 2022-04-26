import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import {Rating, AirbnbRating} from 'react-native-ratings';
import styles from './ItemsStyle';
import Window from '../../constants/Layout';
const width = Window.window.width;

import {calcHeight, calcWidth} from '../../constants/Dimension';
import Styles from '../../constants/Styles';
import {useNavigation} from '@react-navigation/native';
const Items = (props) => {
  const {ItemName, imgPath, productId, isMargin} = props;
  const {navigate} = useNavigation();
  const [rate, setrate] = useState(4);
  const ratingCompleted = (rating) => {
    setrate(rating);
  };
  return (
    <View
      style={[
        {marginRight: isMargin ? calcWidth(10) : 0},
        styles.item_container,
      ]}>
      <View style={styles.item_info_container}>
        <TouchableOpacity
          onPress={() =>
            navigate('posts', {
              itemId: productId,
            })
          }>
          <Image
            style={styles.item_image}
            source={{uri: imgPath}}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text style={styles.item_tile}>{ItemName}</Text>
        <View style={styles.TextratingContainer}>
          <Rating
            onFinishRating={ratingCompleted}
            style={{
              paddingVertical: 1,
              overflow: 'hidden',
              alignItems: 'flex-start',
            }}
            startingValue={rate}
            imageSize={calcWidth(17)}
            type="star"
            tintColor="#1f2e47"
            ratingBackgroundColor="#dbdbdb"
            readonly={true}
          />
        </View>
      </View>
    </View>
  );
};

export default Items;
