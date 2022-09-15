import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { WaterHistoryItem } from '../atoms/WaterHistoryItem';

import { WATER_SELECTORS } from '../../store/selectors/water';

import { colors } from '../../utility/colors';

export const WaterStaticsBox = () => {
  return (
    <View style={styles.boxWrapper}>
      <WaterHistoryItem />
      <WaterHistoryItem />
    </View>
  );
};

const styles = StyleSheet.create({
  boxWrapper: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
});
