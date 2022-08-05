import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const SettingButton = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Config')}>
        <Text style={styles.text}>...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: '-8%',
    top: '-1%',
    transform: [{ rotate: '90deg' }],
    height: '14%',
    width: '14%',
    zIndex: 2,
  },
  text: {
    paddingTop: '80%',
    paddingLeft: '13%',
    color: 'white',
    fontSize: 40,
  },
});
