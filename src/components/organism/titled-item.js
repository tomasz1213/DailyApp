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
import circleIcon from '../../assets/icons/circle.png';
import onIcon from '../../assets/icons/on.png';
import offIcon from '../../assets/icons/off.png';

export const TitledItem = ({ title, desc, onClick, icon, isOn }) => {
  const [iconData, setIconData] = useState();
  const [buttonColor, setButtonColor] = useState(colors.purple.light);

  useEffect(() => {
    switch (icon) {
      case 'settings': {
        setIconData(settingIcon);
        break;
      }
      case 'circle': {
        setIconData(circleIcon);
        break;
      }
      case 'onOff': {
        isOn ? setIconData(onIcon) : setIconData(offIcon);
        break;
      }
      default: {
        setIconData();
      }
    }
  });

  const handleClick = () => {
    setButtonColor(colors.purple.purple);
    onClick();
    setTimeout(() => {
      setButtonColor(colors.purple.light);
    }, 500);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Text style={{ ...styles.text, ...styles.header }}>{title}</Text>
        <Text style={{ ...styles.text, ...styles.body }}>{desc}</Text>
      </View>
      <TouchableOpacity onPress={handleClick} style={styles.buttonContainer}>
        <Image source={iconData} style={styles.icon} tintColor={buttonColor} />
      </TouchableOpacity>
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
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
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
  icon: {
    marginTop: '-20%',
    width: '45%',
    height: '40%',
  },
});
