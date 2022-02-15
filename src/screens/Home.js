import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Weather} from '../widgets/weather';
import {Water} from '../widgets/water';
import {Todo} from '../widgets/todo';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '../store/reducer/root';

import {DataInit} from '../utility/datInit';
import {Steps} from '../widgets/steps';
import {Sleep} from '../widgets/sleep';

export const Home = props => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={styles.container}>
            <DataInit />
            <Weather {...props} />
            <Water {...props} />
            <Todo {...props} />
            <Steps {...props} />
            <Sleep {...props} />
          </SafeAreaView>
        </PersistGate>
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
