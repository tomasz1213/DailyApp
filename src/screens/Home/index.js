import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Button } from 'react-native';
import { useAuthStore } from 'models/Auth.store';
import Toast from 'react-native-toast-message';

const HomeWrapperStyles = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

const HiMomStyles = {
  padding: 16,
};

export const HomeScreen = observer(() => {
  const authStore = useAuthStore();
  const { t } = useTranslation('common');

  const handleLogout = () => {
    authStore.clearSession();
    const message = t('logout.message.success');
    Toast.show({
      type: 'success',
      text1: message,
    });
  };

  return (
    <View style={HomeWrapperStyles}>
      <Text style={HiMomStyles}>{t('hi.mom')}</Text>
      <Button onPress={handleLogout} title={t('logout.button')} />
    </View>
  );
});
