import { SplashScreen, Stack } from 'expo-router';

import { StatusBar } from 'expo-status-bar';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { View } from 'react-native';

import { ThemedView } from '@/components/themed-view';

import Footer from '@/components/footer';

import { useEffect, useState } from 'react';

import { initI18n } from '@/i18n';

import {
  Cairo_400Regular,
  Cairo_500Medium,
  Cairo_600SemiBold,
  Cairo_700Bold,
  useFonts,
} from '@expo-google-fonts/cairo';

import 'react-native-reanimated';

import '../global.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [i18nReady, setI18nReady] = useState(false);

  const [fontsLoaded] = useFonts({
    Cairo_400Regular,
    Cairo_500Medium,
    Cairo_600SemiBold,
    Cairo_700Bold,
  });

  useEffect(() => {
    const prepare = async () => {
      await initI18n();
      setI18nReady(true);
    };
    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded && i18nReady) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, i18nReady]);

  if (!fontsLoaded || !i18nReady) return null;

  return (
    <>
      <SafeAreaProvider>
        <ThemedView className='flex-1 bg-background'>
          <StatusBar style='light' />

          <SafeAreaView className='flex-1'>
            {/* Scrollable content */}
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: {
                  backgroundColor: '#000',
                },
              }}
            />

            {/* Fixed Footer */}
            <Footer />
          </SafeAreaView>
        </ThemedView>
      </SafeAreaProvider>
      {/* this view for render colors which get it dynamically */}
      <View className='hidden text-gray-500 text-green-500 text-red-500 text-yellow-500'></View>
    </>
  );
}
