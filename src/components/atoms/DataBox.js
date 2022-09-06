import { Text, StyleSheet, View, Image } from 'react-native';
import React from 'react';

import { fonts } from '../../utility/fonts';

export const DataBox = ({ data, icon, title, tintColor }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon_wrapper}>
        <Image
          style={styles.icon}
          tintColor={tintColor && tintColor}
          source={icon}
        />
      </View>
      <View>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.data}>{data}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '45%',
    margin: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  icon_wrapper: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  header: {
    fontSize: 16,
    color: 'white',
    fontFamily: fonts.ibm_medium,
  },
  data: {
    fontSize: 12,
    color: 'white',
    fontFamily: fonts.ibm_medium,
  },
});
