import { SplashScreen, Stack } from 'expo-router';

import { StatusBar } from 'expo-status-bar';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { ScrollView } from 'react-native';

import { ThemedView } from '@/components/themed-view';

import Header from '@/components/header';

import Footer from '@/components/footer';

import { useEffect, useState } from 'react';

import { initI18n } from '@/i18n';

import {
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_700Bold,
  useFonts,
} from '@expo-google-fonts/ibm-plex-sans';

import 'react-native-reanimated';

import '../global.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [i18nReady, setI18nReady] = useState(false);

  const [fontsLoaded] = useFonts({
    IBMPlexSans_400Regular,
    IBMPlexSans_500Medium,
    IBMPlexSans_600SemiBold,
    IBMPlexSans_700Bold,
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
    <SafeAreaProvider>
      <ThemedView className='flex-1 bg-background'>
        <StatusBar style='light' />

        <SafeAreaView className='flex-1'>
          {/* Fixed Header */}
          <Header />

          {/* Scrollable content */}
          <ScrollView
            className='flex-1 bg-background'
            contentContainerClassName='flex-grow'
            showsVerticalScrollIndicator={false}
          >
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: {
                  backgroundColor: '#000',
                },
              }}
            />
          </ScrollView>

          {/* Fixed Footer */}
          <Footer />
        </SafeAreaView>
      </ThemedView>
    </SafeAreaProvider>
  );
}
