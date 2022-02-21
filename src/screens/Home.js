import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Weather } from '../widgets/weather';
import { Water } from '../widgets/water';
import { Todo } from '../widgets/todo';
import { Steps } from '../widgets/steps';
import { Sleep } from '../widgets/sleep';

import { DataInit } from '../utility/datInit';

export const Home = props => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <DataInit {...props} />
        <Weather {...props} />
        <Water {...props} />
        <Todo {...props} />
        <Steps {...props} />
        <Sleep {...props} />
      </SafeAreaView>
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
    paddingTop: '5%',
    flex: 1,
    height: '100%',
    color: '#fff',
    backgroundColor: '#030207',
  },
});
