import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import { Weather } from 'widgets/weather';
import { Water } from 'widgets/water';
import { Todo } from 'widgets/todo';
import { Steps } from 'widgets/steps';
import { Sleep } from 'widgets/sleep';

import { SettingButton } from '../components/components/SettingButton';
import { useDataInit } from '../hooks/useDataInit';

export const Home = props => {
  useDataInit();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <SettingButton {...props} />
          <Weather {...props} />
          <Water {...props} />
          <Todo {...props} />
          <Steps {...props} />
          {/* <Sleep {...props} /> */}
        </ScrollView>
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
