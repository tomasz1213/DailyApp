import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { WaterHistoryItem } from 'components/WaterHistoryItem/WaterHistoryItem';

import { cupConfig } from 'helpers/cupConfig';
import { WATER_SELECTORS } from 'store/selectors/water';

export const WaterStaticsBox = () => {
  const waterHistory = useSelector(WATER_SELECTORS.getWaterHistory);
  return (
    <View style={styles.boxWrapper}>
      {waterHistory?.map(({ value, time }) => {
        const image = cupConfig.find(el => el.value === value);
        return (
          <WaterHistoryItem time={time} amount={value} image={image?.icon} />
        );
      })}
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
