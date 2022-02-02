import React from 'react';
import styled, {css} from 'styled-components';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Glass} from '../components/atoms/glass/glass';
import {fonts} from '../utility/fonts';
import {colors} from '../utility/colors';
import Human from '../assets/icons/man.png';

export const Water = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.human} source={Human} tintColor={'#ffffff'} />
      <MeterTop />
      <View style={styles.meter} />
      <Text style={styles.waterUsed}>30%</Text>
      <MeterBottom/>
      <Glass />
    </View>
  );
};

const MeterTop = styled(View)`
  position: absolute;
  top: -1%;
  left:28%;
  width: 90px;
  height: 2px;
  background-color: white;
`;

const MeterBottom = styled(View)`
  position: absolute;
  bottom: -1%;
  left:28%;
  width: 90px;
  height: 2px;
  background-color: white;
`;

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  waterUsed: {
    fontSize: 13,
    borderBottomWidth: 2,
    borderColor: colors.blue.blue,
    fontFamily: fonts.ibm_medium,
    color: colors.white,
    position: 'absolute',
    left: '40%',
    top: '51%',
  },
  container: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  water: {
    margin: 15,
    height: 50,
    width: 50,
  },
  human: {
    marginRight: 50,
    height: 120,
    width: 70,
  },
  meter: {
    position: 'absolute',
    width: 30,
    borderBottomWidth: 2,
    borderColor: colors.blue.blue,
    left: '35%',
    top: '70%',
  },
});
