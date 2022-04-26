// post screen
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Styles from '../../constants/Styles';
import {calcWidth} from '../../constants/Dimension';
import Products from '../../components/utilities/ProductUtilities';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from './PostsDetailsStyle';
import {Rating} from 'react-native-ratings';

const PostsDetails = ({route, navigation}) => {
  const {itemId} = route.params;
  const {goBack, navigate} = useNavigation();
  const [post, setPost] = useState('');
  const [liked, setLiked] = useState(false);
  const [rate, setrate] = useState(4);

  const updatelike = () => {
    setLiked(!liked);
  };
  const ratingCompleted = (rating) => {
    setrate(rating);
  };
  useEffect(() => {
    getPost();
  }, []);
  const getPost = () => {
    Products.PostByID(itemId)
      .then((res) => {
        //console.log('ressss', res);
        setPost(res);
      })
      .catch((err) => {
        console.log('get postbyid', err);
      });
  };
  const data = [
    {
      id: 1,
      name: 'Monica Geller',
      image: require('../../assets/imgs/monica.jpg'),
    },
    {
      id: 2,
      name: 'Jason Momoa',
      image: require('../../assets/imgs/Jason-Momoa.jpg'),
    },
    {
      id: 3,
      name: 'Nicole Kidman',
      image: require('../../assets/imgs/nicole.jpg'),
    },
    {
      id: 4,
      name: 'Patrick Wilson',
      image: require('../../assets/imgs/patreck.jpg'),
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.backGround_container}>
        {/* <Image source={{uri: post.imageUrl}} style={styles.backgroundImage} /> */}
        <ImageBackground
          source={{uri: post.imageUrl}}
          style={{
            backgroundColor: Colors.darkBlue,
            height: 350, // <-- you can adjust visible area
            width: '100%',
            overflow: 'hidden',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          imageStyle={{
            resizeMode: 'cover',
            height: 450, // <-- to play with zoom and adjust image position
          }}>
          <View style={styles.icons}>
            <TouchableOpacity
              onPress={() => {
                goBack();
              }}>
              <Icon
                name="arrow-back-outline"
                size={calcWidth(30)}
                color={Colors.white}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                updatelike();
              }}>
              <Icon
                name={liked ? 'heart-sharp' : 'heart-outline'}
                size={calcWidth(30)}
                color={Colors.white}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.secPart}>
          <View style={styles.icons}>
            <Text style={Styles.header}>{post.name}</Text>
            <Icon
              name="calendar-sharp"
              size={calcWidth(30)}
              color={Colors.white}
            />
          </View>
          <View style={styles.icons2}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btn_text}>WATCH NOW</Text>
            </TouchableOpacity>
            <View style={styles.rating_container}>
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
        <View style={styles.descrp_container}>
          <Text style={styles.descrp}>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores
            Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est
            Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur
            Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore
            Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua.
          </Text>
        </View>
        <View style={Styles.flexRow_between}>
          {data.map((item) => (
            <View style={styles.item_container}>
              <Image source={item.image} style={styles.actor_image} />
              <Text style={styles.actor_name}>{item.name}</Text>
            </View>
          ))}
        </View>
        <View style={styles.studio_container}>
          <Text style={styles.studio}>Studio</Text>
          <Text style={styles.studio_title}>Warner Bros.</Text>
        </View>
        <View style={styles.studio_container}>
          <Text style={styles.studio}>Genre</Text>
          <Text style={styles.studio_title}>ACtion, Adventure, Fantasy</Text>
        </View>
        <View style={styles.studio_container}>
          <Text style={styles.studio}>Release</Text>
          <Text style={styles.studio_title}>2018</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PostsDetails;
