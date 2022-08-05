import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '../atoms/Modal';
import { TextInputModal } from '../atoms/TextInput';

import { apiRequest } from '../../helpers/api';
import { fonts } from '../../utility/fonts';
import { colors } from '../../utility/colors';
import { USER_SELECTORS } from '../../store/selectors/user';
import { registerUser } from '../../store/reducer/user';

export const AuthButtons = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(USER_SELECTORS.getUserData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalRegister, setIsModalRegister] = useState(false);
  const [loginFrom, setLoginFrom] = useState({ login: '', password: '' });
  const [registerFrom, setRegisterFrom] = useState({
    login: '',
    password: '',
    email: '',
    name: '',
  });

  const handleSubmitForm = isRegister => {
    if (isRegister) {
      apiRequest('POST', 'user/register', registerFrom)
        .then(({ data }) => {
          const { token } = data;
          setIsModalOpen(false);
          dispatch(
            registerUser({ token, isAuthenticated: true, ...registerFrom }),
          );
        })
        .catch(err => console.log(err));
    } else {
      apiRequest('POST', 'user/login', loginFrom)
        .then(({ data }) => {
          setIsModalOpen(false);
          dispatch(registerUser({ isAuthenticated: true, data }));
        })
        .catch(err => console.log(err));
    }
  };

  const handleModalSelection = isRegister => {
    if (isRegister) {
      const { login, password, email, name } = registerFrom;
      return (
        <Modal
          onClickCancel={() => setIsModalOpen(false)}
          onClickAccept={() => handleSubmitForm(isModalRegister)}>
          <TextInputModal
            handleInputChange={value =>
              setRegisterFrom({ ...registerFrom, login: value })
            }
            label="Login"
            value={login}
          />
          <TextInputModal
            handleInputChange={value =>
              setRegisterFrom({ ...registerFrom, password: value })
            }
            label="Password"
            value={password}
          />
          <TextInputModal
            handleInputChange={value =>
              setRegisterFrom({ ...registerFrom, email: value })
            }
            label="Email"
            value={email}
          />
          <TextInputModal
            handleInputChange={value =>
              setRegisterFrom({ ...registerFrom, name: value })
            }
            label="Name"
            value={name}
          />
        </Modal>
      );
    }
    const { login, password } = loginFrom;
    return (
      <Modal
        onClickCancel={() => setIsModalOpen(false)}
        onClickAccept={() => handleSubmitForm(isModalRegister)}>
        <TextInputModal
          handleInputChange={value =>
            setLoginFrom({ ...loginFrom, login: value })
          }
          label="Login"
          value={login}
        />
        <TextInputModal
          handleInputChange={value =>
            setLoginFrom({ ...loginFrom, password: value })
          }
          label="Password"
          value={password}
        />
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      {isModalOpen && handleModalSelection(isModalRegister)}
      <View style={styles.authButtons}>
        {!isAuthenticated && (
          <TouchableOpacity
            onPress={() => {
              setIsModalRegister(true);
              setIsModalOpen(true);
            }}>
            <Text style={styles.registerButton}>Register</Text>
          </TouchableOpacity>
        )}
        {!isAuthenticated && (
          <TouchableOpacity
            onPress={() => {
              setIsModalOpen(true);
              setIsModalRegister(false);
            }}>
            <Text style={styles.registerButton}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  authButtons: {
    display: 'flex',
    flexDirection: 'row',
    margin: 2,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    height: '25%',
    width: '95%',
  },
  registerButton: {
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.ibm_medium,
    borderColor: colors.purple.light,
    borderBottomWidth: 2,
  },
});
