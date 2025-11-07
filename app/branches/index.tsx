import { BranchCardStatus } from '@/components/branch-card';

import { CardContainer } from '@/components/card';

import Container from '@/components/container';

import GoToBackHeader from '@/components/go-to-back-header';

import { ThemedText } from '@/components/themed-text';

import { ThemedView } from '@/components/themed-view';

import { fakeData_branches } from '@/constants/fakeData';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { router } from 'expo-router';

import React from 'react';

import { useTranslation } from 'react-i18next';

import { FlatList, TouchableOpacity, View } from 'react-native';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function BranchesPage() {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.dir() === 'rtl';

  return (
    <ThemedView className='flex-1 bg-background'>
      <Container className='flex-1'>
        {/* Page Header */}
        <GoToBackHeader title={t('branches.title')} />

        {/* Branches List */}
        {fakeData_branches.length > 0 ? (
          <CardContainer>
            <FlatList
              data={fakeData_branches}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <View className='h-8' />}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => router.push(`/branches/${item.id}`)}
                  className='flex-row items-center justify-between'
                >
                  {/* Left side: title + address */}
                  <View className='flex-1'>
                    <ThemedText className='mb-1 text-base font-semibold text-white'>
                      {item.name}
                    </ThemedText>
                    <ThemedText className='text-sm text-gray-400' numberOfLines={1}>
                      {item.address}
                    </ThemedText>
                  </View>

                  {/* Right side: arrow + status */}
                  <View className='ml-4 flex-row items-center gap-3'>
                    {/* Status badge */}
                    <BranchCardStatus status={item.status} />

                    {/* Arrow */}
                    <MaterialIcons
                      name={isRTL ? 'arrow-back-ios' : 'arrow-forward-ios'}
                      size={18}
                      color='#aaa'
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
          </CardContainer>
        ) : (
          <View className='flex-1 items-center justify-center'>
            <FontAwesome6 name='building-columns' size={95} className='mb-8 !text-text' />
            <ThemedText className='!text-xl text-text-secondary'>{t('branches.empty')}</ThemedText>
          </View>
        )}
      </Container>
    </ThemedView>
  );
}
