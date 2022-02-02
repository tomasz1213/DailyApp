import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {weatherReducer} from './src/store/reducer/weather';
import {waterReducer} from './src/store/reducer/water';
import {userReducer} from './src/store/reducer/user';
import {DataInit} from './src/utility/datInit';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {Weather} from './src/widgets/weather';
import {Water} from './src/widgets/water';

const rootReducer = combineReducers({
  water: waterReducer,
  user: userReducer,
  weather: weatherReducer,
});

export const store = createStore(rootReducer);

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <DataInit />
        <Weather />
        <Water />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#030207',
  },
  text: {
    color: 'white',
  },
  container: {
    flex: 1,
    height: '100%',
    color: '#fff',
    backgroundColor: '#030207',
  },
});

export default App;
