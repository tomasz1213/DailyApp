import React from 'react';
import styled from 'styled-components/native';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {WEATHER_SELECTORS} from '../store/selectors/weather';
import {fonts} from '../utility/fonts';
import {colors} from '../utility/colors';
import Sunrise from '../assets/icons/sunrise.png';
import Sunset from '../assets/icons/sunset.png';
import Umbrella from '../assets/icons/umbrella.png';
const defaultSize = Dimensions.get('window').height / 40 - 2;

export const Weather = ({navigation}) => {
  const {daily_chance_of_rain, name, sunrise, sunset, temp_c, temp_f} =
    useSelector(WEATHER_SELECTORS.getWeatherData);
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Weather')}>
      <Text style={styles.textTemp}>
        {temp_c}
        {'\u00b0'}C
      </Text>
      <View style={styles.weatherbox}>
        <LinearGradient
          colors={[colors.black, '#241d3b', colors.blue.cold]}
          style={{...styles.linearGradient, ...styles.linearGradientLeft}}
          locations={[0.1, 0.4, 0.7]}
          useAngle={true}
          angle={65}
          angleCenter={{x: 0.6, y: 0.5}}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Image
            style={styles.icons}
            source={Sunrise}
            tintColor={colors.purple.light}
          />
          <Text style={styles.text}>{sunrise}</Text>
        </LinearGradient>
        <LinearGradient
          colors={[colors.black, '#241d3b', colors.blue.cold]}
          style={{...styles.linearGradient, ...styles.linearGradientRight}}
          locations={[0.1, 0.4, 0.7]}
          useAngle={true}
          angle={250}
          angleCenter={{x: 0.5, y: 0.6}}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}>
          <Image
            style={{...styles.last, ...styles.icons}}
            source={Sunset}
            tintColor={colors.purple.light}
          />
          <Text style={{...styles.lastText, ...styles.text}}>{sunset}</Text>
          <Image
            style={{...styles.umbrella, ...styles.icons}}
            source={Umbrella}
            tintColor={colors.purple.light}
          />
          <Text style={{...styles.umbrellaText, ...styles.text}}>
            {daily_chance_of_rain}%
          </Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

const TouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  height: 23%;
`;

const styles = StyleSheet.create({
  textTemp: {
    color: 'white',
    textAlign: 'center',
    fontFamily: fonts.ibm_medium,
    fontSize: 40,
    width: '100%',
  },
  text: {
    position: 'absolute',
    color: '#ffffff',
    fontSize: defaultSize - 4,
    marginLeft: 4,
    top: '57%',
    fontFamily: fonts.ibm_bold,
    backgroundColor: 'transparent',
  },
  weatherbox: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    height: '100%',
    marginHorizontal: '5%',
  },
  linearGradient: {
    flex: 1,
    width: '50%',
    height: '100%',
  },
  linearGradientLeft: {
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  linearGradientRight: {
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
  container: {
    width: '100%',
    height: '23%',
    marginVertical: '5%',
  },
  icons: {
    margin: defaultSize - 5,
    height: defaultSize + 20,
    width: defaultSize + 20,
  },
  last: {
    position: 'absolute',
    right: 10,
  },
  lastText: {
    position: 'absolute',
    right: 10,
    top: '57%',
  },
  umbrella: {
    marginLeft: -15,
    width: '100%',
  },
  umbrellaText: {
    left: -15,
  },
});