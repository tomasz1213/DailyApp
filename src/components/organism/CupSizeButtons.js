import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { WATER_SELECTORS } from '../../store/selectors/water';
import {
  setWaterData,
  setGlassSize as setReducerGlassSize,
} from '../../store/reducer/water';

import { CustomButton } from '../atoms/CustomButton';
import { Modal as AnotherModal } from '../atoms/Modal';
import { TextInput } from '../atoms/TextInput';

import settings_icon from '../../assets/icons/settings.png';

import { colors } from '../../utility/colors';
import { cupConfig } from '../../helpers/cupConfig';

export const CustomSizeButtons = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [glassSize, setGlassSize] = useState('');
  const { waterDrink } = useSelector(WATER_SELECTORS.getWaterData);

  const handleGlassClick = glassSize => {
    setShowModal(false);
    setShowButtons(true);
    setGlassSize(glassSize);
  };
  const onClickDrink = () => {
    const waterAllReadyDrunk = waterDrink + glassSize;
    dispatch(setWaterData(waterAllReadyDrunk));
    setShowButtons(false);
  };
  const onClickDefault = () => {
    dispatch(setReducerGlassSize(glassSize));
    setShowButtons(false);
  };

  return (
    <>
      {showModal && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(!showModal)}>
          <AnotherModal
            onClickCancel={() => setShowModal(!showModal)}
            onClickAccept={() => {
              setShowModal(false);
              setShowButtons(true);
            }}>
            <TextInput
              handleInputChange={data => setGlassSize(+data)}
              inputValue={glassSize}
              label="Type custom glass size"
            />
          </AnotherModal>
        </Modal>
      )}
      {cupConfig.map(({ value, label, icon, backgroundColor }) => (
        <CustomButton
          key={value}
          onClick={() => handleGlassClick(value)}
          text={label}
          style={{
            backgroundColor: backgroundColor,
            ...styles.drinkButtonContainer,
          }}
          image={icon}
        />
      ))}
      <CustomButton
        onClick={() => setShowModal(true)}
        text={'Custom'}
        image={settings_icon}
        style={{ backgroundColor: '#F2EFE6', ...styles.drinkButtonContainer }}
      />
      {showButtons && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showButtons}
          onRequestClose={() => setShowButtons(false)}>
          <TouchableOpacity
            style={styles.buttonsWrapper}
            onPress={() => setShowButtons(false)}>
            <CustomButton
              style={styles.button}
              onClick={onClickDefault}
              text="Save as Default"
            />
            <CustomButton
              style={styles.button}
              text="Drink"
              onClick={onClickDrink}
            />
          </TouchableOpacity>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  buttonsWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 20,
    width: '40%',
    borderRadius: 25,
    minHeight: 50,
    backgroundColor: '#DED0F2',
    color: 'black',
  },
  drinkButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 20,
    width: '40%',
    borderRadius: 25,
    minHeight: 50,
  },
});
