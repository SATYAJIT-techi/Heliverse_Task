import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from './src/FirstScreen';
import SecondScreen from './src/SecondScreen';
import ThirdScreen from './src/ThirdScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="First Screen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="First Screen" component={FirstScreen}  />
        <Stack.Screen name="Second Screen" component={SecondScreen} />
        <Stack.Screen name="Third Screen" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
