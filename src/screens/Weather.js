import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';

import { BackButton } from '../components/atoms/BackButton';

import { fonts } from '../utility/fonts';
import { colors } from '../utility/colors';

export const Weather = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton {...navigation}/>
        <Text style={styles.text}>Weather</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    width: '100%',
    height: '100%', 
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:'25%',
    width: '100%',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontFamily: fonts.ibm_semi_bold,
  },
});
