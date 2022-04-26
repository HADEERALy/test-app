import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../constants/Colors';
import Styles from '../../constants/Styles';
import {calcWidth} from '../../constants/Dimension';
import styles from './SearchStyle';
const Search = (props) => {
  return (
    <View style={Styles.flexRow}>
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            height: '64%',
            // backgroundColor: '#a4c6fc',
          },
          styles.searchShadow,
        ]}>
        <TouchableOpacity style={styles.searchIcon}>
          <Icon name="search" size={calcWidth(20)} color={Colors.white} />
        </TouchableOpacity>
        <TextInput
          textAlign="left"
          onChangeText={props.change}
          onBlur={props.blur}
          placeholder="Search"
          value={props.inputValue}
          style={styles.input}
          placeholderTextColor={Colors.white}
        />
      </View>
    </View>
  );
};

export default Search;
