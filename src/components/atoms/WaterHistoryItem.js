import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import tea_cup_icon from '../../assets/icons/tea-cup.png';
import { fonts } from '../../utility/fonts';
import { colors } from '../../utility/colors';

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
    fontSize: 16,
    fontFamily: fonts.ibm_regular,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  timeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
