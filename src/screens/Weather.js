import { Text, StyleSheet, View, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { WEATHER_SELECTORS } from 'store/selectors/weather';
import { BackButton } from 'components/BackButton/BackButton';
import { DataBox } from 'components/DataBox/DataBox';

import { fonts } from 'utils/fonts';
import { colors } from 'utils/colors';
import location_icon from 'assets/icons/location.png';
import humidity_icon from 'assets/icons/Humidity_icon.png';
import clouds_icon from 'assets/icons/clouds.png';
import wind_icon from 'assets/icons/wind.png';
import rain_icon from 'assets/icons/rain.png';
import atmospheric_pressure_icon from 'assets/icons/atmospheric-pressure.png';
import compass from 'assets/icons/compass.png';

export const Weather = ({ navigation }) => {
  const weatherData = useSelector(WEATHER_SELECTORS.getWeatherData);
  const imageData =
    weatherData?.next_hour?.data?.next_1_hours?.summary?.symbol_code;
  const [weatherIcon, setWeatherIcon] = useState();
  const {
    air_temperature,
    relative_humidity,
    cloud_area_fraction,
    wind_speed,
    wind_from_direction,
  } = weatherData?.current;

  useEffect(() => {
    setWeatherIcon(`http://192.168.8.168:5000/upload/weather/${imageData}.png`);
  }, [imageData]);
  return (
    <View style={styles.container}>
      <ScrollView>
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
                style={styles.weather_icon}
                source={{
                  uri: weatherIcon,
                }}
              />
            </View>
            <View style={styles.info_box}>
              <DataBox
                title="Humidity"
                data={`${relative_humidity} %`}
                icon={humidity_icon}
              />
              <DataBox
                title="Clouds"
                data={`${cloud_area_fraction} %`}
                icon={clouds_icon}
              />
              <DataBox
                title="Wind"
                data={`${wind_speed} km/h`}
                icon={wind_icon}
                tintColor="white"
              />
              <DataBox
                title="Direction"
                data={`${wind_from_direction} \u00b0`}
                icon={compass}
                tintColor="white"
              />
              <DataBox
                title="Rain"
                data={`${weatherData?.next_hour?.data?.next_1_hours?.details.precipitation_amount} mm`}
                icon={rain_icon}
              />
              <DataBox
                title="Pressure"
                data={`${weatherData?.next_hour?.data?.instant?.details.air_pressure_at_sea_level} hPa`}
                icon={atmospheric_pressure_icon}
                tintColor="white"
              />
              <DataBox
                title="Rain"
                data={`${weatherData?.next_hour?.data?.next_1_hours?.details.precipitation_amount} mm`}
                icon={rain_icon}
              />
              <DataBox
                title="Pressure"
                data={`${weatherData?.next_hour?.data?.instant?.details.air_pressure_at_sea_level} hPa`}
                icon={atmospheric_pressure_icon}
                tintColor="white"
              />
            </View>
          </View>
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
    marginTop: 30,
  },
});
