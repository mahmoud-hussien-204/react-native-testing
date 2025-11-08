import { CardContainer } from '@/components/card';

import Container from '@/components/container';

import GoToBackHeader from '@/components/go-to-back-header';

import LanguageModal from '@/components/language-modal';

import RateModal from '@/components/reate-modal';

import SectionTitle from '@/components/section-title';

import SettingsCard from '@/components/settings-card';

import { ThemedView } from '@/components/themed-view';
import { changeLanguage } from '@/i18n';

import { router } from 'expo-router';

import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Share, View } from 'react-native';

export default function ProfilePage() {
  const { t } = useTranslation();

  const [langVisible, setLangVisible] = useState(false);

  const [rateVisible, setRateVisible] = useState(false);

  const handleLanguageChange = async (lang: 'en' | 'ar') => {
    await changeLanguage(lang);
  };

  const handleRateSubmit = (data: any) => {
    console.log('Rate submitted', data);
    setRateVisible(false);
  };

  const handleShare = async () => {
    await Share.share({
      message: 'Check out Comma Barber app: https://commabarber.com',
    });
  };

  const handleLogout = () => {
    console.log('Logout');
    // router.replace('/');
  };

  return (
    <ThemedView className='flex-1 bg-background'>
      <Container>
        <GoToBackHeader title={t('settings.profile')} />
        <View className='mt-16'></View>
        <SectionTitle title={t('settings.title')} />
        <CardContainer className='gap-8'>
          <SettingsCard
            icon='help-outline'
            title={t('settings.help_center')}
            onPress={() => router.push('/helper-center')}
          />
          <SettingsCard
            icon='language'
            title={t('settings.language')}
            onPress={() => setLangVisible(true)}
          />
          <SettingsCard
            icon='store'
            title={t('settings.branches')}
            onPress={() => router.push('/branches')}
          />
          <SettingsCard
            icon='star-rate'
            title={t('settings.rate_app')}
            onPress={() => setRateVisible(true)}
          />
          <SettingsCard
            icon='share'
            title={t('settings.share_with_friend')}
            onPress={handleShare}
          />
        </CardContainer>

        <CardContainer className='mt-6'>
          <SettingsCard
            icon='logout'
            title={t('settings.logout')}
            onPress={handleLogout}
            iconClassName='!text-red-500'
          />
        </CardContainer>

        {/* Modals */}
        <LanguageModal
          visible={langVisible}
          onClose={() => setLangVisible(false)}
          onSubmit={handleLanguageChange}
        />
        <RateModal
          visible={rateVisible}
          onClose={() => setRateVisible(false)}
          onSubmit={handleRateSubmit}
        />
      </Container>
    </ThemedView>
  );
}
