import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { colors } from '../utility/colors';
import musicalIcon from '../assets/icons/musical-note.png';
import noteIcon from '../assets/icons/note.png';
import { fonts } from '../utility/fonts';

export const Sleep = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sidebButton}>
        <Image
          tintColor={colors.white}
          style={styles.icon}
          source={musicalIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.middleButton}>
        <Text>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebButton}>
        <Image tintColor={colors.white} style={styles.icon} source={noteIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    marginVertical: '5%',
    marginHorizontal: '5%',
    borderColor: colors.purple.light,
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  middleButton: {
    width: '50%',
    borderLeftColor: colors.purple.light,
    borderRightColor: colors.purple.light,
    borderWidth: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fonts.ibm_regular,
  },
  sidebButton: {
    width: '25%',
  },
  icon: {
    marginHorizontal: '40%',
    marginVertical: '15%',
    width: 20,
    height: 20,
  },
});
