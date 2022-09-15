import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { fonts } from '../../utility/fonts';
import { colors } from '../../utility/colors';

export const WaterHistoryItem = () => {
  return (
    <View style={styles.boxWrapper}>
      <View>
        <View></View>
        <Text style={styles.text}>9:30</Text>
      </View>
      <Text style={styles.text}>100ml</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.ibm_regular,
  },
});
