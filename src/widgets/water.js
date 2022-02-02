import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {WATER_SELECTORS} from '../store/selectors/water';
import {USER_SELECTORS} from '../store/selectors/user';
import {setWaterData} from '../store/reducer/water';
import {Glass} from '../components/atoms/glass/glass';
import {fonts} from '../utility/fonts';
import {colors} from '../utility/colors';
import Bottle from '../assets/icons/bottle.png';
let bottlePercentHeight = 70;

export const Water = () => {
  const {glassSize, waterDrink} = useSelector(WATER_SELECTORS.getWaterData);
  const {needDrink} = useSelector(USER_SELECTORS.getUserData);
  const dispatch = useDispatch();
  const [bottlePercent, setBottlePercent] = useState(0);

  const handleGlassClick = () => {
    const waterDrinks = +waterDrink + +glassSize;
    const calculatePercentage = (waterDrinks / needDrink) * 100;
    dispatch(setWaterData({waterDrink: waterDrinks}));
    setBottlePercent(calculatePercentage.toFixed(0));
    bottlePercentHeight = bottlePercent - 70;
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.human}
        source={Bottle}
        tintColor={colors.purple.light}
      />
      <Text style={styles.waterUsed}>{bottlePercent}%</Text>
      <TouchableOpacity onPress={handleGlassClick} style={styles.glass}>
        <Glass />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  waterUsed: {
    fontSize: 13,
    borderBottomWidth: 2,
    borderColor: colors.purple.light,
    fontFamily: fonts.ibm_medium,
    color: colors.white,
    position: 'absolute',
    width: 40,
    left: '35%',
    top: `${bottlePercentHeight}%`,
    textAlign: 'right',
  },
  container: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  water: {
    margin: 15,
    height: 50,
    width: 50,
  },
  human: {
    marginRight: 50,
    height: 120,
    width: 70,
  },
  glass: {
    top: '10%',
  },
});
