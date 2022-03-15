import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';

import { colors } from '../../utility/colors';
import left from '../../assets/icons/left.png';

export const BackButton = navigation => {
  const handleBackNavigation = () => {
    if (navigation.canGoBack()) {
      navigation.pop();
    } else {
      navigation.navigate('Home');
    }
  };
  return (
    <TouchableOpacity onPress={handleBackNavigation} style={styles.container}>
      <Image
        style={styles.icon}
        tintColor={colors.purple.light}
        source={left}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  container: {
    position: 'absolute',
    left: '2%',
    height: 35,
    width: 50,
  },
});
