import Container from '@/components/container';

import GoToBackHeader from '@/components/go-to-back-header';

import { ThemedText } from '@/components/themed-text';

import { ThemedView } from '@/components/themed-view';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import React from 'react';

import { useTranslation } from 'react-i18next';

import { View } from 'react-native';

export default function NotificationsPage() {
  const { t } = useTranslation();

  return (
    <ThemedView className='flex-1 bg-background'>
      <Container>
        <GoToBackHeader title={t('notifications.title')} />
        <View className='flex-1 items-center justify-center'>
          <MaterialIcons name='notifications-active' size={95} className='mb-8 !text-text' />
          <ThemedText className='!text-xl text-text-secondary'>
            {t('notifications.empty')}
          </ThemedText>
        </View>
      </Container>
    </ThemedView>
  );
}
