import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';

import { colors } from 'utils/colors';
import { fonts } from 'utils/fonts';

export const CustomButton = ({
  onClick,
  style,
  text,
  image,
  tintColor,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onClick} style={{ ...style }}>
      {image && (
        <Image style={styles.icon} tintColor={tintColor} source={image} />
      )}
      <Text style={{ ...styles.text, ...textStyle }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 20,
    color: colors.blue.cold,
    fontFamily: fonts.ibm_medium,
  },
});
