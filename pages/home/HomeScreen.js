// Home screen
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {calcHeight} from '../../constants/Dimension';
import Products from '../../components/utilities/ProductUtilities';
import Search from '../../components/searchComponent/Search';
import Styles from '../../constants/Styles';
import Items from '../../components/itemsComponent/Items';
import {useFocusEffect} from '@react-navigation/native';
import styles from './HomeScreenStyle';
const HomeScreen = () => {
  const [posts, setPosts] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert('Hold on!', 'Are you sure you want to Exit?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  useEffect(() => {
    getAllPosts();
  }, []);
  const getAllPosts = () => {
    Products.getPosts()
      .then((res) => {
        setPosts(res.data);
        //console.log('ressss', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const renderItems = ({item}) => {
    // console.log('itemmmmmmmmmmmmmmmm', item);
    return (
      <Items
        key={item._id}
        ItemName={item.name}
        imgPath={
          item.imageUrl
            ? item.imageUrl
            : 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com'
        }
        isMargin={true}
        productId={item._id}
      />
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.mainHeader}>Hello, What do you </Text>
        <Text style={Styles.header}>want to watch?</Text>
        <Search />
      </View>
      <View style={styles.secPart}>
        <View style={Styles.flexRow_between}>
          <Text style={styles.item_title}>RECOMMENEDED FOR YOU</Text>
          <TouchableOpacity>
            <Text style={styles.item_title_light}>See all</Text>
          </TouchableOpacity>
        </View>
        <View
        // style={{backgroundColor: 'red'}}
        >
          <FlatList
            horizontal={true}
            data={posts}
            renderItem={renderItems}
            keyExtractor={(item) => item._id.toString()}
            extraData={selectedId}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={[{marginTop: calcHeight(10)}, Styles.flexRow_between]}>
          <Text style={styles.item_title}>TOP RATED</Text>
          <TouchableOpacity>
            <Text style={styles.item_title_light}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal={true}
          data={posts}
          renderItem={renderItems}
          keyExtractor={(item) => item._id.toString()}
          extraData={selectedId}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
