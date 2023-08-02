/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetails from './src/screens/MovieDetails';
import SideBar from './src/screens/SideBar';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='MovieDetails' component={MovieDetails}/>
          <Stack.Screen name='ProfileDetails' component={SideBar}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;