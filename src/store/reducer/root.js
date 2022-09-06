import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { weatherReducer } from './weather';
import { waterReducer } from './water';
import { userReducer } from './user';
import { todoReducer } from './todo';
import { FITReducer } from './fitness';

export const rootReducer = combineReducers({
  water: waterReducer,
  user: userReducer,
  weather: weatherReducer,
  todo: todoReducer,
  fitness: FITReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
