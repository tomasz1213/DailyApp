import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { WATER_SELECTORS } from '../store/selectors/water';
import { USER_SELECTORS } from '../store/selectors/user';
import { setWaterData } from '../store/reducer/water';
import Glass from '../assets/icons/glasss.png';
import { fonts } from '../utility/fonts';
import { colors } from '../utility/colors';
import Bottle from '../assets/icons/human.png';

export const Water = ({ navigation }) => {
  const { glassSize, waterDrink } = useSelector(WATER_SELECTORS.getWaterData);
  const { needDrink } = useSelector(USER_SELECTORS.getUserData);
  const dispatch = useDispatch();
  const [bottlePercent, setBottlePercent] = useState(0);
  let bottlePercentHeight = useRef(new Animated.Value(70)).current;
  const calculatePercentage = (waterDrink / needDrink) * 100;

  useEffect(() => {
    setBottlePercent(calculatePercentage.toFixed(0));
  });

  useEffect(() => {
    Animated.timing(bottlePercentHeight, {
      toValue: -bottlePercent + 70,
      useNativeDriver: true,
    }).start();
  });

  const handleGlassClick = () => {
    const waterAllReadyDrunk = waterDrink + glassSize;

    if (bottlePercent >= 110) {
      return;
    }
    dispatch(setWaterData({ waterDrink: waterAllReadyDrunk }));
    setBottlePercent(calculatePercentage.toFixed(0));
    Animated.timing(bottlePercentHeight, {
      toValue: -bottlePercent + 70,
      useNativeDriver: true,
    }).start();
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Water')}
      style={styles.container}>
      <Image
        style={styles.bottle}
        source={Bottle}
        tintColor={colors.purple.light}
      />
      <Animated.Text
        style={{
          ...styles.waterUsed,
          transform: [{ translateY: bottlePercentHeight }],
        }}>
        {bottlePercent}%
      </Animated.Text>
      <TouchableOpacity onPress={handleGlassClick} style={styles.glass}>
        <Image
          style={styles.glassImg}
          tintColor={colors.purple.light}
          source={Glass}
        />
        <Text style={styles.glassPlus}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
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
    top: 10,
    left: '43%',
    textAlign: 'right',
  },
  container: {
    marginVertical: '10%',
    width: '100%',
    height: '12%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  water: {
    margin: 15,
    height: 50,
    width: 50,
  },
  bottle: {
    marginRight: 50,
    height: 120,
    width: 70,
  },
  glass: {
    top: '10%',
  },
  glassImg: {
    marginTop: '-50%',
    height: 90,
    width: 80,
  },
  glassPlus: {
    position: 'absolute',
    color: 'white',
    fontFamily: fonts.ibm_semi_bold,
    fontSize: 24,
    left: '42%',
    top: '-16%',
  },
});
