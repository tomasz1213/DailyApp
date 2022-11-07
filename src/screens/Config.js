import { Text, StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';

import { LocationSetting } from 'components/LocationSetting/LocationSetting';
import { AuthButtons } from 'components/AuthButtons/AuthButtons';
import { BackButton } from 'components/BackButton/BackButton';

import { fonts } from 'utils/fonts';
import { colors } from 'utils/colors';

export const ConfigScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton {...navigation} />
        <Text style={styles.text}>Configuration</Text>
      </View>
      <View style={{ height: '93%' }}>
        <ScrollView style={styles.items}>
          <LocationSetting />
        </ScrollView>
        <AuthButtons />
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
