import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput as Input,
} from 'react-native';
import React from 'react';

import { colors } from 'utils/colors';
import { fonts } from 'utils/fonts';

export const TextInput = ({
  onClickAccept,
  onClickCancel,
  handleInputChange,
  inputValue,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Input
          onChangeText={handleInputChange}
          style={styles.textInput}
          value={inputValue}
        />
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={onClickCancel} color={colors.black}>
            <Text style={{ ...styles.button, color: 'white' }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClickAccept} color={colors.black}>
            <Text style={styles.button}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: colors.black,
    opacity: 0.8,
    zIndex: 3,
    alignItems: 'center',
  },
  modal: {
    opacity: 1,
    width: '95%',
  },
  buttonWrapper: {
    width: '60%',
    marginHorizontal: '20%',
    marginTop: '4%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textInput: {
    marginHorizontal: '5%',
    width: '90%',
    borderColor: colors.purple.light,
    borderWidth: 1,
    opacity: 1,
    color: 'white',
    backgroundColor: 'black',
    fontSize: 16,
    padding: '2%',
  },
  button: {
    color: colors.purple.light,
    fontFamily: fonts.ibm_semi_bold,
    fontSize: 20,
  },
});
