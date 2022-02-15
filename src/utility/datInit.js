import React, {useEffect} from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Fitness from '@ovalmoney/react-native-fitness';
import {Buffer} from 'buffer';
import LiveAudioStream from 'react-native-live-audio-stream';
import {fetchData} from '../utility/api';
import {useDispatch} from 'react-redux';
import {setData} from '../store/reducer/weather';
import {
  setSleepData,
  setStepsData,
  setCaloriesData,
  setDistanceData,
} from '../store/reducer/fitness';
import {permissions, requestPermission} from './permissions';

export const DataInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(
      'http://api.weatherapi.com/v1/forecast.json?key=80b78e07cdd74bd89df193721222701&q=Ptaszkowa&days=1&aqi=yes&alerts=yes',
    ).then(({data}) => dispatch(setData(data)));
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

  return <View></View>;
};

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
