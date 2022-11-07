import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { BarChart } from 'react-native-chart-kit';
import { colors } from 'utils/colors';
import { FIT_SELECTORS } from 'store/selectors/fitness';

export const Steps = ({ navigation }) => {
  const stepsData = useSelector(FIT_SELECTORS.getStepsData);
  const calories = useSelector(FIT_SELECTORS.getCaloriesData);
  const distance = useSelector(FIT_SELECTORS.getDistanceData);

  const steps = stepsData.length
    ? stepsData
    : [
        {
          endDate: '2022-02-06T22:51:57.938+0100',
          quantity: 1,
          startDate: '2022-02-06T15:35:31.158+0100',
        },
        {
          endDate: '2022-02-07T20:55:39.450+0100',
          quantity: 2,
          startDate: '2022-02-07T07:37:37.501+0100',
        },
        {
          endDate: '2022-02-08T22:29:36.110+0100',
          quantity: 3,
          startDate: '2022-02-08T07:42:36.809+0100',
        },
        {
          endDate: '2022-02-09T22:06:09.062+0100',
          quantity: 4,
          startDate: '2022-02-09T07:44:46.594+0100',
        },
        {
          endDate: '2022-02-10T22:18:38.583+0100',
          quantity: 5,
          startDate: '2022-02-10T08:10:02.858+0100',
        },
        {
          endDate: '2022-02-11T16:44:02.203+0100',
          quantity: 6,
          startDate: '2022-02-11T07:13:41.850+0100',
        },
        {
          endDate: '2022-02-12T16:44:02.203+0100',
          quantity: 7,
          startDate: '2022-02-12T07:13:41.850+0100',
        },
      ];

  const setWeekDay = () => {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysData = steps.map(el =>
      new Date(el.endDate.split('T')[0]).getDay(),
    );
    if (daysData.length >= 7) {
      daysData.splice(0, daysData.length - 7);
    }
    return daysData.map(el => weekDays[el]);
  };
  const generateData = () => {
    const data = steps.map(el => el.quantity);
    if (data.length >= 7) {
      data.splice(0, data.length - 7);
    }
    return data;
  };
  const data = {
    labels: setWeekDay(),
    datasets: [
      {
        data: generateData(),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View>
        <BarChart
          style={styles.chart}
          data={data}
          fromZero
          width={Dimensions.get('window').width}
          height={220}
          showBarTops={false}
          chartConfig={{
            backgroundColor: colors.black,
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => colors.black,
            labelColor: (opacity = 1) => 'white',
            fillShadowGradient: colors.purple.lighter,
            fillShadowGradientOpacity: 1,
            barRadius: 10,
            barPercentage: 0.8,
            propsForBackgroundLines: {
              strokeWidth: 0,
            },
          }}
          verticalLabelRotation={0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    marginVertical: '3%',
    marginLeft: '-4%',
  },
  chart: {
    margin: 0,
    width: '100%',
    backgroundColor: colors.black,
  },
});
