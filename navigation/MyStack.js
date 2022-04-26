import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './../pages/HomeScreen';
import {createStackNavigator} from 'react-navigation-stack';

const {Navigator, Screen} = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer initialState={'Home'}>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
    // <Stack.Navigator>
    //   <Stack.Screen
    //     name="Home"
    //     component={HomeScreen}
    //     options={{title: 'Welcome'}}
    //   />
    // </Stack.Navigator>
  );
};
export default MyStack;
