import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Weather} from '../widgets/weather';
import {Water} from '../widgets/water';
import {Todo} from '../widgets/todo';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {weatherReducer} from '../store/reducer/weather';
import {waterReducer} from '../store/reducer/water';
import {userReducer} from '../store/reducer/user';
import {todoReducer} from '../store/reducer/todo';
import {DataInit} from '../utility/datInit';

const rootReducer = combineReducers({
  water: waterReducer,
  user: userReducer,
  weather: weatherReducer,
  todo: todoReducer,
});

export const store = createStore(rootReducer);

export const Home = (props) => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <DataInit />
          <Weather />
          <Water />
          <Todo {...props}/>
        </SafeAreaView>
      </Provider>
    </>
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
