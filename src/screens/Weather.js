import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { WEATHER_SELECTORS } from '../store/selectors/weather';
import { BackButton } from '../components/atoms/BackButton';

import { fonts } from '../utility/fonts';
import { colors } from '../utility/colors';
import location_icon from '../assets/icons/location.png';
import weather_icon from '../assets/icons/weather/clearsky_day.png';

export const Weather = ({ navigation }) => {
  const [weatherIcon, setWeatherIcon] = useState();
  const weatherData = useSelector(WEATHER_SELECTORS.getWeatherData);
  const { air_temperature } = weatherData.current;
  console.log(weatherData.next_hour.data.next_1_hours.summary.symbol_code);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton {...navigation} />
        <Text style={styles.text}>Weather</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.location}>
          <Image
            tintColor={colors.purple.light}
            style={styles.icon}
            source={location_icon}
          />
          <Text style={styles.text_high}>{weatherData.location_name}</Text>
        </View>
        <View>
          <Text style={styles.text_temp}>
            {air_temperature}
            {'\u00b0'}C
          </Text>
          <View style={styles.location}>
            <Image
              // tintColor={colors.purple.light}
              style={styles.weather_icon}
              source={weather_icon}
            />
          </View>
        </View>
      </View>
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
});
