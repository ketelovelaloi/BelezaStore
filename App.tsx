import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/config/i18n';
import store from './src/store';
import RootNavigator from './src/navigation/RootNavigator';
import { ClerkProvider } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <GluestackUIProvider config={config}>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </GluestackUIProvider>
        </I18nextProvider>
      </Provider>
    </ClerkProvider>
  );
}