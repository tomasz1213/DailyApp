import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request, check, PERMISSIONS, RESULTS } from 'react-native-permissions';
import GetLocation from 'react-native-get-location';

import { fetchData } from 'utils/api';
import { TitledItem } from 'components/TiltedItem/TitledItem';
import { TextInput } from 'components/TextInput/TextInput';
import { Modal } from 'components/Modal/Modal';
import {
  setUserLocation,
  setUserGpsLocation,
  setIsGpsOn,
} from 'store/reducer/user';
import { USER_SELECTORS } from 'store/selectors/user';

export const LocationSetting = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState();
  const [locationGps, setLocationGps] = useState(false);
  const dispatch = useDispatch();
  const userLocation = useSelector(USER_SELECTORS.getUserData);

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
    fetchData(
      `https://nominatim.openstreetmap.org/search.php?q=${inputValue}&format=jsonv2`,
    ).then(res => {
      dispatch(setUserLocation(res.data[0]));
    });
    handleShowInput();
  };

  const handleGpsLocation = () => {
    let status;
    requestPermission();
    if (locationGps) {
      setLocationGps(false);
      status = false;
    } else {
      setLocationGps(true);
      status = true;
    }
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 5000,
    }).then(location => {
      dispatch(setUserGpsLocation({ ...location }));
      dispatch(setIsGpsOn(status));
    });
  };

  useEffect(() => {
    if (userLocation.display_name) {
      setInputValue(userLocation?.location.display_name.split(',')[0]);
      setLocationGps(userLocation?.isGpsOn);
    } else {
      setInputValue(' ');
      setLocationGps(userLocation?.isGpsOn);
    }
  }, []);

  return (
    <>
      {showInput && (
        <Modal
          onClickAccept={handleAcceptButton}
          onClickCancel={handleShowInput}>
          <TextInput
            handleInputChange={setInputValue}
            inputValue={inputValue}
          />
        </Modal>
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
