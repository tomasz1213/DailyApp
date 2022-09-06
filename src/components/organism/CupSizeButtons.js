import React from 'react';

import { CustomButton } from '../atoms/CustomButton';

import cup_icon from '../../assets/icons/cup.png';
import bottle_icon from '../../assets/icons/bottle.png';
import plastic_cup_icon from '../../assets/icons/plastic-cup.png';
import tea_cup_icon from '../../assets/icons/tea-cup.png';
import settings_icon from '../../assets/icons/settings.png';

import { colors } from '../../utility/colors';

export const CustomSizeButtons = () => {
  return (
    <>
      <CustomButton
        onClick={() => null}
        text={'500 ml'}
        style={{ backgroundColor: '#F1F5DC' }}
        image={bottle_icon}
      />
      <CustomButton
        onClick={() => null}
        text={'180 ml'}
        image={cup_icon}
        style={{ backgroundColor: '#DED0F2' }}
        tintColor={colors.blue.light}
      />
      <CustomButton
        onClick={() => null}
        text={'200 ml'}
        style={{ backgroundColor: '#DEE6FC' }}
        image={plastic_cup_icon}
      />
      <CustomButton
        onClick={() => null}
        text={'300 ml'}
        image={tea_cup_icon}
        style={{ backgroundColor: '#D4F2D0' }}
      />
      <CustomButton
        onClick={() => null}
        text={'Custom'}
        image={settings_icon}
        style={{ backgroundColor: '#F2EFE6' }}
      />
    </>
  );
};
