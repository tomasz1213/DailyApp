import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';

import { fonts } from '../../utility/fonts';
import { colors } from '../../utility/colors';
import settingIcon from '../../assets/icons/settings.png';

export const TitledItem = ({ title, desc, onClick, icon }) => {
  const [iconData, setIconData] = useState();

  useEffect(() => {
    switch (icon) {
      case 'settings': {
        setIconData(settingIcon);
        break;
      }
      default: {
        setIconData(' ');
      }
    }
  },[]);
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Text style={{ ...styles.text, ...styles.header }}>{title}</Text>
        <Text style={{ ...styles.text, ...styles.body }}>{desc}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Image source={settingIcon} tintColor='white' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.black,
    padding: '1%',
    width: '95%',
    minHeight: 70,
    maxHeight: 180,
    marginHorizontal: '2.5%',
    marginVertical: '2%',
    shadowColor: colors.purple.light,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 1.62,

    elevation: 3,
  },
  leftSide: {
    width: '85%',
  },
  buttonContainer: {
    height: '100%',
    width: '15%',
  },
  header: {
    fontSize: 16,
    fontFamily: fonts.ibm_medium,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontFamily: fonts.ibm_regular,
  },
});
