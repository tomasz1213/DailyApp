import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';

import {Home} from './src/screens/Home';
import {Todo} from './src/screens/Todo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} hidden={true} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="Weather" component={Todo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
