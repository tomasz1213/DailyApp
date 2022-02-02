import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../utility/colors';
import {fonts} from '../../../utility/fonts';

export const Glass = () => {
  return (
    <Container>
      <TopGlass>
        <LinearGradient
          style={styles.linearGradient}
          colors={[
            '#ffffff',
            colors.purple.light,
            colors.purple.purple,
            colors.black,
          ]}
          locations={[0.1, 0.1, 0.4, 0.9]}
          start={{x: 0.1, y: 0}}
          end={{x: 1, y: 0}}
        />
      </TopGlass>
      <SideGlass>
        <LinearGradient
          style={styles.linearGradient}
          colors={[
            '#ffffff',
            colors.purple.light,
            colors.purple.purple,
            colors.black,
          ]}
          locations={[0.1, 0.1, 0.4, 0.9]}
          start={{x: 0.1, y: 0}}
          end={{x: 1, y: 0}}
        />
      </SideGlass>
      <SideGlass2>
        <LinearGradient
          style={styles.linearGradient}
          colors={[
            '#ffffff',
            colors.purple.light,
            colors.purple.purple,
            colors.black,
          ]}
          locations={[0.1, 0.1, 0.4, 0.9]}
          start={{x: 0.1, y: 0}}
          end={{x: 1, y: 0}}
        />
      </SideGlass2>
      <BottomGlass>
        <LinearGradient
          style={styles.linearGradient}
          colors={[
            '#ffffff',
            colors.purple.light,
            colors.purple.purple,
            colors.black,
          ]}
          locations={[0.1, 0.1, 0.4, 0.9]}
          start={{x: 0.1, y: 0}}
          end={{x: 1, y: 0}}
        />
      </BottomGlass>
      <Plus>+</Plus>
    </Container>
  );
};

const Plus = styled.Text`
  color: #c9ade7;
  left: 6%;
  top: -5%;
  font-size: 30px;
  font-family: ${fonts.ibm_medium};
`;

const SideGlass = styled.View`
  left: 40%;
  width: 4px;
  height: 50px;
  background-color: white;
  transform: rotate(10deg);
`;

const SideGlass2 = styled.View`
  width: 4px;
  height: 50px;
  background-color: white;
  transform: rotate(170deg);
`;

const TopGlass = styled.View`
  left: 25%;
  top: -24%;
  width: 4px;
  height: 52px;
  background-color: white;
  transform: rotate(90deg);
`;

const BottomGlass = styled.View`
  left: 15%;
  top: 34%;
  width: 4px;
  height: 35px;
  background-color: white;
  transform: rotate(90deg);
`;

const Container = styled.View`
  width: 100px;
  height: 124px;
  margin-left: 20px;
  flex-direction: row;
`;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%',
  },
});
