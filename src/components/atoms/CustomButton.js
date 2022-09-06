import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';

import { colors } from '../../utility/colors';
import { fonts } from '../../utility/fonts';

export const CustomButton = ({ onClick, style, text, image, tintColor }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{ ...styles.container, ...style }}>
      <Image style={styles.icon} tintColor={tintColor} source={image} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 20,
    width: '40%',
    borderRadius: 25,
    minHeight: 50,
  },
  text: {
    fontSize: 20,
    color: colors.blue.cold,
    fontFamily: fonts.ibm_medium,
  },
});
