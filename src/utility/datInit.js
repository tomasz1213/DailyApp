import React, {useEffect} from 'react';
import {View} from 'react-native';
import {fetchData} from '../utility/api';
import {useDispatch} from 'react-redux';
import {setData} from '../store/reducer/weather';

export const DataInit = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData(
      'http://api.weatherapi.com/v1/forecast.json?key=80b78e07cdd74bd89df193721222701&q=Ptaszkowa&days=1&aqi=yes&alerts=yes',
    ).then(({data}) => dispatch(setData(data)));
  });
  return <View></View>;
};
