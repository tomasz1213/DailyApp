import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';

import { colors } from '../../utility/colors';
import { fonts } from '../../utility/fonts';

export const Modal = ({ onClickAccept, onClickCancel, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>{children}</View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={onClickCancel} color={colors.black}>
          <Text style={{ ...styles.button, color: 'white' }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClickAccept} color={colors.black}>
          <Text style={styles.button}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: colors.black,
    opacity: 0.8,
    zIndex: 99,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    top: 0,
  },
  modal: {
    opacity: 1,
    width: '95%',
  },
  buttonWrapper: {
    width: '60%',
    marginHorizontal: '20%',
    marginTop: '7%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    color: colors.purple.light,
    fontFamily: fonts.ibm_semi_bold,
    fontSize: 20,
  },
});
