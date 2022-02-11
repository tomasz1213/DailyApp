import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Buffer} from 'buffer';
import Fitness from '@ovalmoney/react-native-fitness';
import LiveAudioStream from 'react-native-live-audio-stream';
import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {fetchData} from '../utility/api';
import {useDispatch} from 'react-redux';
import {setData} from '../store/reducer/weather';
import {
  setSleepData,
  setStepsData,
  setCaloriesData,
  setDistanceData,
} from '../store/reducer/fitness';

const requestPermission = async () => {
  check(PERMISSIONS.ANDROID.ACTIVITY_RECOGNITION).then(result => {
    switch (result) {
      case RESULTS.DENIED:
        request(PERMISSIONS.ANDROID.ACTIVITY_RECOGNITION).then(result => {});
        break;
    }
  });
  check(PERMISSIONS.ANDROID.RECORD_AUDIO).then(result => {
    switch (result) {
      case RESULTS.DENIED:
        request(PERMISSIONS.ANDROID.RECORD_AUDIO).then(result => {});
        break;
    }
  });
};

export const DataInit = () => {
  const dispatch = useDispatch();
  const permissions = [
    {
      kind: Fitness.PermissionKinds.Steps,
      access: Fitness.PermissionAccesses.Read,
    },
    {
      kind: Fitness.PermissionKinds.Steps,
      access: Fitness.PermissionAccesses.Write,
    },
    {
      kind: Fitness.PermissionKinds.Distances,
      access: Fitness.PermissionAccesses.Read,
    },
    {
      kind: Fitness.PermissionKinds.Distances,
      access: Fitness.PermissionAccesses.Write,
    },
    {
      kind: Fitness.PermissionKinds.Calories,
      access: Fitness.PermissionAccesses.Read,
    },
    {
      kind: Fitness.PermissionKinds.Calories,
      access: Fitness.PermissionAccesses.Write,
    },
    {
      kind: Fitness.PermissionKinds.HeartRate,
      access: Fitness.PermissionAccesses.Read,
    },
    {
      kind: Fitness.PermissionKinds.HeartRate,
      access: Fitness.PermissionAccesses.Write,
    },
    {
      kind: Fitness.PermissionKinds.Activity,
      access: Fitness.PermissionAccesses.Read,
    },
    {
      kind: Fitness.PermissionKinds.Activity,
      access: Fitness.PermissionAccesses.Write,
    },
    {
      kind: Fitness.PermissionKinds.SleepAnalysis,
      access: Fitness.PermissionAccesses.Read,
    },
    {
      kind: Fitness.PermissionKinds.SleepAnalysis,
      access: Fitness.PermissionAccesses.Write,
    },
  ];

  useEffect(() => {
    fetchData(
      'http://api.weatherapi.com/v1/forecast.json?key=80b78e07cdd74bd89df193721222701&q=Ptaszkowa&days=1&aqi=yes&alerts=yes',
    ).then(({data}) => dispatch(setData(data)));
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
