import { Text, StyleSheet, View, TextInput as Input } from 'react-native';
import React from 'react';

import { colors } from '../../utility/colors';
import { fonts } from '../../utility/fonts';

export const TextInput = ({ handleInputChange, inputValue, label }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Input
        onChangeText={handleInputChange}
        style={styles.textInput}
        value={inputValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: '1%',
    backgroundColor: colors.black,
    opacity: 0.8,
    zIndex: 3,
    alignItems: 'center',
  },
  textInput: {
    marginHorizontal: '5%',
    width: '90%',
    height: 35,
    borderColor: colors.purple.light,
    borderWidth: 1,
    opacity: 1,
    color: 'white',
    backgroundColor: 'black',
    fontSize: 16,
    padding: '2%',
  },
  label: {
    color: colors.white,
    fontFamily: fonts.ibm_medium,
    fontSize: 16,
  },
});
