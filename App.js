import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, Dimensions } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store/reducer/root';

import { Home } from './src/screens/Home';
import { Todo } from './src/screens/Todo';
import { ConfigScreen } from './src/screens/Config';
import { Weather } from './src/screens/Weather';
import { Water } from './src/screens/Water';

const Stack = createNativeStackNavigator();
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <StatusBar translucent={true} hidden={false} />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { height: Dimensions.get('window').height, flex: 1 },
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Config" component={ConfigScreen} />
          <Stack.Screen name="Todo" component={Todo} />
          <Stack.Screen name="Weather" component={Weather} />
          <Stack.Screen name="Water" component={Water} />
        </Stack.Navigator>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
