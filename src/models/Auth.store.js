import React, { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { action, computed, makeObservable, observable } from 'mobx';

const noop = () => undefined;

const AuthStoreContext = createContext({
  user: null,
  token: null,
  isAuthenticated: noop,
  setToken: noop,
  clearSession: noop,
  setUser: noop,
});

export const useAuthStore = () => useContext(AuthStoreContext);

export const AuthStoreProvider = ({ children }) => {
  const [store] = useState(new AuthStore());

  return (
    <AuthStoreContext.Provider value={store}>
      {children}
    </AuthStoreContext.Provider>
  );
};

export default class AuthStore {
  user = null;
  token = null;

  constructor() {
    this.init();

    makeObservable(this, {
      user: observable,
      token: observable,
      isAuthenticated: computed,
      setToken: action,
      clearSession: action,
      setUser: action,
    });
  }

  get isAuthenticated() {
    return !!this.token;
  }

  async init() {
    const token = await AsyncStorage.getItem('auth-token');
    if (token) {
      this.token = token;
    }
  }

  async setToken(token) {
    this.token = token;
    await AsyncStorage.setItem('auth-token', token);
  }

  async clearSession() {
    this.user = null;
    this.token = null;
    await AsyncStorage.removeItem('auth-token');
  }

  async setUser(user) {
    this.user = user;
  }
}
