import { Text, StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';

import { BackButton } from '../components/atoms/BackButton';
import { TitledItem } from '../components/organism/titled-item';

import { fonts } from '../utility/fonts';
import { colors } from '../utility/colors';

export const ConfigScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton {...navigation} />
        <Text style={styles.text}>Configuration</Text>
      </View>
      <View>
        <ScrollView style={styles.items}>
          <TitledItem
            title="Location Settings"
            desc="Show input and type location for weather information"
            settings='settings'
          />
          <TitledItem
            title="Location Settings"
            desc="Show input and type location for weather information"
          />
        </ScrollView>
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
