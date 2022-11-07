import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Button } from 'react-native';
import { useAuthStore } from 'models/Auth.store';

const LoginWrapperStyles = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export const LoginScreen = observer(() => {
  const authStore = useAuthStore();
  const { t } = useTranslation('common');

  const handleLogin = () => {
    authStore.setToken('secret-token');
  };

  return (
    <View style={LoginWrapperStyles}>
      <Button onPress={handleLogin} title={t('login.button')} />
    </View>
  );
});
