import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal as AnotherModal,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Modal } from 'components/Modal/Modal';
import { TextInput } from 'components/TextInput/TextInput';

import { apiRequest } from 'helpers/api';
import useAuth from 'hooks/useAuth';
import { fonts } from 'utils/fonts';
import { colors } from 'utils/colors';
import { registerUser, setIsAuthenticated } from 'store/reducer/user';

export const AuthButtons = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();
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
        <AnotherModal
          animationType="slide"
          transparent={true}
          visible={isModalOpen}>
          <Modal
            onClickCancel={() => setIsModalOpen(false)}
            onClickAccept={() => handleSubmitForm(isModalRegister)}>
            <TextInput
              handleInputChange={value =>
                setRegisterFrom({ ...registerFrom, login: value })
              }
              label="Login"
              value={login}
            />
            <TextInput
              handleInputChange={value =>
                setRegisterFrom({ ...registerFrom, password: value })
              }
              label="Password"
              value={password}
            />
            <TextInput
              handleInputChange={value =>
                setRegisterFrom({ ...registerFrom, email: value })
              }
              label="Email"
              value={email}
            />
            <TextInput
              handleInputChange={value =>
                setRegisterFrom({ ...registerFrom, name: value })
              }
              label="Name"
              value={name}
            />
          </Modal>
        </AnotherModal>
      );
    }
    const { login, password } = loginFrom;
    return (
      <AnotherModal
        animationType="slide"
        transparent={true}
        visible={isModalOpen}>
        <Modal
          onClickCancel={() => setIsModalOpen(false)}
          onClickAccept={() => handleSubmitForm(isModalRegister)}>
          <TextInput
            handleInputChange={value =>
              setLoginFrom({ ...loginFrom, login: value })
            }
            label="Login"
            value={login}
          />
          <TextInput
            handleInputChange={value =>
              setLoginFrom({ ...loginFrom, password: value })
            }
            label="Password"
            value={password}
          />
        </Modal>
      </AnotherModal>
    );
  };

  return (
    <>
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
        {!isAuthenticated ? (
          <TouchableOpacity
            onPress={() => {
              setIsModalOpen(true);
              setIsModalRegister(false);
            }}>
            <Text style={styles.registerButton}>Login</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              dispatch(
                setIsAuthenticated({
                  token: '',
                  isAuthenticated: false,
                  login: '',
                }),
              );
            }}>
            <Text style={styles.registerButton}>Logout</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
