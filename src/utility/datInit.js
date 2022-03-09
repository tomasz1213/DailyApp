import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Fitness from '@ovalmoney/react-native-fitness';

import {
  setCurrentWeatherData,
  setPrecipitationData,
  setHourWeatherData,
  setSunAndMoonData,
  setLocationName,
} from '../store/reducer/weather';
import {
  setSleepData,
  setStepsData,
  setCaloriesData,
  setDistanceData,
} from '../store/reducer/fitness';
import { setLastReset, clearWaterData } from '../store/reducer/water';
import { WATER_SELECTORS } from '../store/selectors/water';
import { USER_SELECTORS } from '../store/selectors/user';

import { fetchData } from '../utility/api';
import { permissions, requestPermission } from './permissions';

// import {Buffer} from 'buffer';
// import LiveAudioStream from 'react-native-live-audio-stream';

export const DataInit = ({ navigation }) => {
  const dispatch = useDispatch();
  const lastReset = useSelector(WATER_SELECTORS.getLastReset);
  const userData = useSelector(USER_SELECTORS.getUserData);

  if (!lastReset) {
    dispatch(setLastReset(new Date().getDate()));
  }
  if (lastReset < new Date().getDate()) {
    dispatch(clearWaterData());
    dispatch(setLastReset(new Date().getDate()));
  }

  useEffect(() => {
    const todayDate = new Date().toISOString().split('T')[0];

    const returnHourOffset = () => {
      let offset = new Date().getTimezoneOffset()/60;
      let extraZero;
      if (offset < 10 || offset > -10){
        extraZero = 0;
        if(offset < 0){
          extraZero = -0;
          offset = Math.abs(offset);
        }
      }
      return `${extraZero}${offset}:00`
    };

    if (userData.gpsLocation.isOn) {
      fetchData(
        `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${userData.gpsLocation.latitude}&lon=${userData.gpsLocation.longitude}`,
      ).then(({ data }) => {
        dispatch(
          setCurrentWeatherData(data.properties.timeseries[0].data.instant.details));
        dispatch(
          setPrecipitationData(data.properties.timeseries[0].data.next_1_hours.details.precipitation_amount));
        dispatch(
          setHourWeatherData(data.properties.timeseries[1]));
      });
      
      fetchData(`https://api.met.no/weatherapi/sunrise/2.0/.json?lat=${userData.gpsLocation.latitude}&lon=${userData.gpsLocation.longitude}&date=${todayDate}&offset=${returnHourOffset()}`)
      .then(({ data }) => dispatch(setSunAndMoonData(data.location.time[0])));

      fetchData(`https://nominatim.openstreetmap.org/reverse.php?lat=${useruserData.gpsLocation.latitude}&lon=${userData.gpsLocation.longitude}&format=jsonv2`)
      .then(({data}) => {
        if(data.address.city){
          return dispatch(setLocationName(data.address.city))
        }else {
          return dispatch(setLocationName(data.address.village))
        }
      });
    } else if (userData.location.display_name) {
      fetchData(
        `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${userData.location.lat}&lon=${userData.location.lon}`,
      ).then(({ data }) => {
        dispatch(
          setCurrentWeatherData(data.properties.timeseries[0].data.instant.details));
        dispatch(
          setPrecipitationData(data.properties.timeseries[0].data.next_1_hours.details.precipitation_amount));
        dispatch(
          setHourWeatherData(data.properties.timeseries[1]));
      });

      fetchData(`https://api.met.no/weatherapi/sunrise/2.0/.json?lat=${userData.location.lat}&lon=${userData.location.lon}&date=${todayDate}&offset=${returnHourOffset()}`)
      .then(({ data }) => {
        dispatch(setSunAndMoonData(data.location.time[0]));
      });

      fetchData(`https://nominatim.openstreetmap.org/reverse.php?lat=${userData.location.lat}&lon=${userData.location.lon}&format=jsonv2`)
      .then(({data}) => {
        if(data.address.city){
          return dispatch(setLocationName(data.address.city))
        }else {
          return dispatch(setLocationName(data.address.village))
        }
      });

    }
  }, []);

  useEffect(() => {
    requestPermission();
    Fitness.requestPermissions(permissions)
      .then(authorized => {
        let y = new Date().getFullYear();
        let m = new Date().getMonth();
        let d = new Date().getDate() - 7;
        let convertStartdate = new Date(y, m, d);

        Fitness.getSteps({
          startDate: convertStartdate, // required
          endDate: new Date().toISOString(), // required
        }).then(res => {
          dispatch(setStepsData(res));
        });
        Fitness.getDistances({
          startDate: convertStartdate, // required
          endDate: new Date().toISOString(), // required
        }).then(res => {
          dispatch(setDistanceData(res));
        });
        Fitness.getCalories({
          startDate: convertStartdate, // required
          endDate: new Date().toISOString(), // required
        }).then(res => {
          dispatch(setCaloriesData(res));
        });
        Fitness.getSleepAnalysis({
          startDate: convertStartdate, // required
          endDate: new Date().toISOString(), // required
        }).then(res => {
          dispatch(setSleepData(res));
        });
      })
      .catch(error => {
        console.log(error);
      });
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Config')}>
        <Text style={styles.text}>...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: '-5%',
    transform: [{ rotate: '90deg' }],
    height: '14%',
    width: '14%',
    zIndex: 2,
  },
  text: {
    paddingTop: '80%',
    paddingLeft: '13%',
    color: 'white',
    fontSize: 40,
  },
});

// TODO --- SLEEP analytics values like [220-225, 0-10] ---> sound of silience
// useEffect(() => {
//   const options = {
//     sampleRate: 32000, // default is 44100 but 32000 is adequate for accurate voice recognition
//     channels: 1, // 1 or 2, default 1
//     bitsPerSample: 16, // 8 or 16, default 16
//     audioSource: 6, // android only (see below)
//     bufferSize: 2048, // default is 2048
//   };

//   LiveAudioStream.init(options);
//   LiveAudioStream.start();
//   const listener = LiveAudioStream.on('data', data => {
//     var chunk = Buffer.from(data, 'base64');
//     console.log(chunk);
//   });

//   setTimeout(() => {
//     LiveAudioStream.stop();
//   }, 1000);
//   // LiveAudioStream.start();

//   return () => {
//     LiveAudioStream.stop();
//     listener.remove();
//   };
// });
