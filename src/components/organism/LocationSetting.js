import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request, check, PERMISSIONS, RESULTS } from 'react-native-permissions';
import GetLocation from 'react-native-get-location'

import { TitledItem } from './titled-item';
import { TextInputModal } from '../atoms/TextInput';
import { setUserLocation, setUserGpsLocation } from '../../store/reducer/user';
import { USER_SELECTORS } from '../../store/selectors/user';

export const LocationSetting = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState(false);
  const [locationGps, setLocationGps] = useState(false);
  const dispatch = useDispatch();
  const userLocation = useSelector(USER_SELECTORS.getUserData);
  console.log(userLocation);
  const requestPermission = async () => {
    check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
      switch (result) {
        case RESULTS.DENIED:
          request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {});
          break;
      }
    });
  };

  const handleShowInput = () => {
    showInput ? setShowInput(false) : setShowInput(true);
  };

  const handleAcceptButton = () => {
    dispatch(setUserLocation(inputValue));
    handleShowInput();
  };

  const handleGpsLocation = () => {
    requestPermission();
    locationGps ? setLocationGps(false) : setLocationGps(true);
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 5000,
    })
    .then(location => {
        dispatch(setUserGpsLocation({...location, isOn: locationGps}));
    })
  };

  useEffect(() => {
    setInputValue(userLocation.location);
    setLocationGps(userLocation.gpsLocation.isOn)
  }, []);

  return (
    <>
      {showInput && (
        <TextInputModal
          onClickAccept={handleAcceptButton}
          onClickCancel={handleShowInput}
          handleInputChange={setInputValue}
          inputValue={inputValue}
        />
      )}
      <TitledItem
        onClick={handleShowInput}
        title="Manual Location Settings"
        desc="Type location for weather information"
        icon="settings"
      />
      <TitledItem
        title="GPS Location Settings"
        desc="Tick to use your GPS data for weather information"
        icon="onOff"
        isOn={locationGps}
        onClick={handleGpsLocation}
      />
    </>
  );
};
