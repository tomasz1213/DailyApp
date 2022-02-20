import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Fitness from '@ovalmoney/react-native-fitness';

import { setData } from '../store/reducer/weather';
import {
  setSleepData,
  setStepsData,
  setCaloriesData,
  setDistanceData,
} from '../store/reducer/fitness';
import { setLastReset, clearWaterData } from '../store/reducer/water';
import { WATER_SELECTORS } from '../store/selectors/water';

import { fetchData } from '../utility/api';
import { permissions, requestPermission } from './permissions';

// import {Buffer} from 'buffer';
// import LiveAudioStream from 'react-native-live-audio-stream';

export const DataInit = ({ navigation }) => {
  const lastReset = useSelector(WATER_SELECTORS.getLastReset);
  const dispatch = useDispatch();

  if (!lastReset) {
    dispatch(setLastReset(new Date().getDate()));
  }
  if (lastReset < new Date().getDate()) {
    dispatch(clearWaterData());
    dispatch(setLastReset(new Date().getDate()));
  }

  useEffect(() => {
    fetchData(
      'http://api.weatherapi.com/v1/forecast.json?key=80b78e07cdd74bd89df193721222701&q=Ptaszkowa&days=1&aqi=yes&alerts=yes',
    ).then(({ data }) => dispatch(setData(data)));
  });

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
