import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { WEATHER_SELECTORS } from '../store/selectors/weather';
import { BackButton } from '../components/atoms/BackButton';
import { DataBox } from '../components/atoms/DataBox';

import { fonts } from '../utility/fonts';
import { colors } from '../utility/colors';
import location_icon from '../assets/icons/location.png';
import humidity_icon from '../assets/icons/Humidity_icon.png';
import clouds_icon from '../assets/icons/clouds.png';
import wind_icon from '../assets/icons/wind.png';

export const Water = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ height: '100%', flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          minHeight: '100%',
          overflow: 'visible',
        }}>
        <View style={styles.header}>
          <BackButton {...navigation} />
          <Text style={styles.text}>Water</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.info_box}></View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    width: '100%',
    height: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    width: '100%',
  },
  main: {
    width: '100%',
    height: '30%',
    color: 'white',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontFamily: fonts.ibm_semi_bold,
  },
  text_high: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.ibm_medium,
  },
  text_temp: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 46,
    fontFamily: fonts.ibm_light,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 2,
  },
  weather_icon: {
    width: 100,
    height: 100,
  },
  location: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  info_box: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
