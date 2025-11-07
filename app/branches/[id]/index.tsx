import { CardContainer } from '@/components/card';

import Container from '@/components/container';

import GoToBackHeader from '@/components/go-to-back-header';

import Skeleton from '@/components/skeleton';

import { ThemedText } from '@/components/themed-text';

import { ThemedView } from '@/components/themed-view';

import { fakeData_branches } from '@/constants/fakeData';

import { FontAwesome6 } from '@expo/vector-icons';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Image } from 'expo-image';

import { useLocalSearchParams } from 'expo-router';

import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Linking, TouchableOpacity, View } from 'react-native';

export default function BranchDetailsPage() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { t } = useTranslation();

  const [imageLoaded, setImageLoaded] = useState(false);

  const branch = fakeData_branches[0];

  if (!branch) {
    return (
      <View className='flex-1 items-center justify-center'>
        <FontAwesome6 name='building-columns' size={95} className='mb-8 !text-text' />
        <ThemedText className='!text-xl text-text-secondary'>{t('branches.not_found')}</ThemedText>
      </View>
    );
  }

  const handleCall = () => {
    Linking.openURL(`tel:${branch.phone}`);
  };

  const handleOpenMap = () => {
    if (branch.locationUrl) Linking.openURL(branch.locationUrl);
  };

  return (
    <ThemedView className='flex-1 bg-background'>
      <Container>
        <GoToBackHeader title={branch.name} />

        {!imageLoaded && <Skeleton className='h-[160px] w-full' />}

        <Image
          source={branch.cover}
          contentFit='cover'
          contentPosition='center'
          style={{ height: 160, borderRadius: 16 }}
          onLoadEnd={() => setImageLoaded(true)}
        />

        {/* ===== Info Boxes ===== */}
        <View className='mt-8 gap-8'>
          {/* 1. Opening Time */}
          <CardContainer className='flex-row items-center justify-between'>
            <View className='flex-row items-center gap-3'>
              <MaterialIcons name='access-time' size={20} color='#fff' />
              <ThemedText className='font-semibol !text-lg'>
                {t('branch_details.opening_time')}
              </ThemedText>
            </View>
            <ThemedText className='!text-lg font-bold text-text-secondary'>
              24 {t('branch_details.hours')}
            </ThemedText>
          </CardContainer>

          {/* 2. Phone Number */}
          <CardContainer className='flex-row items-center justify-between'>
            <View className='flex-row items-center gap-3'>
              <MaterialIcons name='call' size={20} color='#fff' />
              <ThemedText className='!text-lg font-semibold'>
                {t('branch_details.phone')}
              </ThemedText>
            </View>
            <TouchableOpacity
              onPress={handleCall}
              activeOpacity={0.7}
              className='min-w-20 items-center rounded-md bg-text-secondary py-1.5'
            >
              <ThemedText className='!text-lg font-bold !text-black'>
                {t('branch_details.call')}
              </ThemedText>
            </TouchableOpacity>
          </CardContainer>

          {/* 3. View Location */}
          <CardContainer className='flex-row items-center justify-between'>
            <View className='flex-row items-center gap-3'>
              <MaterialIcons name='location-pin' size={20} color='#fff' />
              <ThemedText className='!text-lg font-semibold '>
                {t('branch_details.view_location')}
              </ThemedText>
            </View>
            <TouchableOpacity
              onPress={handleOpenMap}
              activeOpacity={0.7}
              className='min-w-20 items-center rounded-md bg-text-secondary py-1.5'
            >
              <ThemedText className='!text-lg font-bold !text-black'>
                {t('branch_details.open')}
              </ThemedText>
            </TouchableOpacity>
          </CardContainer>
        </View>
      </Container>
    </ThemedView>
  );
}
