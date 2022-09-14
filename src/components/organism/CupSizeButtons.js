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

import cup_icon from '../../assets/icons/cup.png';
import bottle_icon from '../../assets/icons/bottle.png';
import plastic_cup_icon from '../../assets/icons/plastic-cup.png';
import tea_cup_icon from '../../assets/icons/tea-cup.png';
import settings_icon from '../../assets/icons/settings.png';

import { colors } from '../../utility/colors';

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
      <CustomButton
        onClick={() => handleGlassClick(500)}
        text={'500 ml'}
        style={{ backgroundColor: '#F1F5DC', ...styles.drinkButtonContainer }}
        image={bottle_icon}
      />
      <CustomButton
        onClick={() => handleGlassClick(180)}
        text={'180 ml'}
        image={cup_icon}
        style={{ backgroundColor: '#DED0F2', ...styles.drinkButtonContainer }}
        tintColor={colors.blue.light}
      />
      <CustomButton
        onClick={() => handleGlassClick(200)}
        text={'200 ml'}
        style={{ backgroundColor: '#DEE6FC', ...styles.drinkButtonContainer }}
        image={plastic_cup_icon}
      />
      <CustomButton
        onClick={() => handleGlassClick(300)}
        text={'300 ml'}
        image={tea_cup_icon}
        style={{ backgroundColor: '#D4F2D0', ...styles.drinkButtonContainer }}
      />
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
              textStyle={{
                color: 'white',
                borderColor: colors.purple.light,
                borderBottomWidth: 2,
              }}
            />
            <CustomButton
              style={styles.button}
              text="Drink"
              onClick={onClickDrink}
              textStyle={{
                color: 'white',
                borderColor: colors.purple.light,
                borderBottomWidth: 2,
              }}
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
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  button: {
    width: '40%',
    height: 35,
    alignItems: 'center',
    color: 'white',
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
