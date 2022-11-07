import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';
import { useAuthStore } from '../models/Auth.store';
import { LoginScreen } from '../screens/Login';
import { observer } from 'mobx-react-lite';

const Stack = createNativeStackNavigator();

export const AppNavigator = observer(() => {
  const authStore = useAuthStore();

  return (
    <Stack.Navigator>
      {authStore.isAuthenticated ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
});
