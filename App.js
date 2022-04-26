import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './pages/splash/Splash';
import HomeScreen from './pages/home/HomeScreen';
import PostsDetails from './pages/posts/PostsDetails';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="posts" component={PostsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
