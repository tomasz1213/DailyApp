import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { fonts } from 'utils/fonts';
import { colors } from 'utils/colors';

export const WaterHistoryItem = ({ time, amount, image }) => {
  return (
    <View style={styles.boxWrapper}>
      <View style={styles.timeWrapper}>
        <Image style={styles.icon} tintColor="white" source={image} />
        <Text style={styles.text}>{time}</Text>
      </View>
      <Text style={styles.text}>{amount} ml</Text>
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
    fontSize: 22,
    fontFamily: fonts.ibm_regular,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  timeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
