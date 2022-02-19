import {Text, StyleSheet, View} from 'react-native';
import React from 'react';

import { colors } from '../utility/colors';

export const ConfigScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hej from TODO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    width: '100%',
    height: '100%', 
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
});
