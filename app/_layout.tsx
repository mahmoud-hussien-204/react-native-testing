import { SplashScreen, Stack } from 'expo-router';

import { StatusBar } from 'expo-status-bar';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { ScrollView } from 'react-native';

import { ThemedView } from '@/components/themed-view';

import Header from '@/components/header';

import Footer from '@/components/footer';

import 'react-native-reanimated';

import { useEffect, useState } from 'react';

import { initI18n } from '@/i18n';

import '../global.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        // Initialize translations before rendering
        await initI18n();
      } catch (e) {
        console.warn('i18n init failed:', e);
      } finally {
        setReady(true);
        // Hide splash after initialization
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!ready) return null;

  return (
    <SafeAreaProvider>
      <ThemedView className='bg-background flex-1'>
        <StatusBar style='light' />

        <SafeAreaView className='flex-1'>
          {/* Fixed Header */}
          <Header />

          {/* Scrollable content */}
          <ScrollView
            className='bg-background flex-1'
            contentContainerClassName='flex-grow'
            showsVerticalScrollIndicator={false}
          >
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: {
                  backgroundColor: '#111',
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
