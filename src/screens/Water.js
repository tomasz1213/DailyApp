import { Text, StyleSheet, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as Progress from 'react-native-progress';

import { WATER_SELECTORS } from '../store/selectors/water';
import { USER_SELECTORS } from '../store/selectors/user';
import { BackButton } from '../components/atoms/BackButton';
import { WaterStaticsBox } from '../components/organism/WaterStaticsBox';

import { CustomSizeButtons } from '../components/organism/CupSizeButtons';

import { fonts } from '../utility/fonts';
import { colors } from '../utility/colors';

export const Water = ({ navigation }) => {
  const { waterDrink } = useSelector(WATER_SELECTORS.getWaterData);
  const { needDrink } = useSelector(USER_SELECTORS.getUserData);
  const calculatePercentage = ((waterDrink / needDrink) * 100) / 100;
  const [percentageDrunk, setPercentageDrunk] = useState(calculatePercentage);

  useEffect(() => {
    setPercentageDrunk(+calculatePercentage.toFixed(2));
  }, [calculatePercentage, waterDrink]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ height: '100%', flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          minHeight: '100%',
          overflow: 'visible',
        }}>
        <View style={styles.header}>
          <BackButton {...navigation} />
          <Text style={styles.text}>Water</Text>
        </View>
        <View style={styles.main}>
          <Progress.Circle
            size={170}
            showsText={true}
            thickness={10}
            progress={percentageDrunk}
            color="#A5D9D9"
            borderWidth={2}
          />
          <Text style={styles.text_high}>
            {waterDrink} of {needDrink}ml
          </Text>
          <View style={styles.info_box}>
            <CustomSizeButtons />
          </View>
          <WaterStaticsBox />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    width: '100%',
    height: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: '100%',
  },
  main: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontFamily: fonts.ibm_semi_bold,
  },
  text_high: {
    textAlign: 'center',
    color: '#A5D9D9',
    fontSize: 20,
    fontFamily: fonts.ibm_medium,
    marginTop: 20,
  },
  info_box: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
