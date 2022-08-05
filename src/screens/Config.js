import { Text, StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';

import { LocationSetting } from '../components/organism/LocationSetting';
import { AuthButtons } from '../components/organism/AuthButtons';
import { BackButton } from '../components/atoms/BackButton';

import { fonts } from '../utility/fonts';
import { colors } from '../utility/colors';

export const ConfigScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton {...navigation} />
        <Text style={styles.text}>Configuration</Text>
      </View>
      <View style={{ height: '70%' }}>
        <ScrollView style={styles.items}>
          <LocationSetting />
        </ScrollView>
      </View>
      <AuthButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    width: '100%',
    height: '100%',
  },
  items: {
    height: '75%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    width: '100%',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontFamily: fonts.ibm_semi_bold,
  },
});
