import { CardContainer } from '@/components/card';

import SectionTitle from '@/components/section-title';

import { ThemedView } from '@/components/themed-view';

import { ThemedText } from '@/components/themed-text';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { useTranslation } from 'react-i18next';

import Container from '../container';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { TouchableOpacity } from 'react-native';

const WhatDoYouWantTodaySection = () => {
  const { t } = useTranslation();
  return (
    <ThemedView>
      <Container>
        <SectionTitle title={t('home.what_do_you_want_to_do_today')} />
        <ThemedView className='flex-row gap-4'>
          <TouchableOpacity
            onPress={() => console.log('Take an appointment')}
            activeOpacity={0.7}
            className='flex-1'
          >
            <CardContainer className='flex-1 items-center justify-center gap-4'>
              <FontAwesome5 name='calendar-alt' size={40} color='#fff' />
              <ThemedText className='!text-lg font-bold'>
                {t('home.take_an_appointment')}
              </ThemedText>
            </CardContainer>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('Shop our products')}
            activeOpacity={0.7}
            className='flex-1'
          >
            <CardContainer className=' items-center justify-center gap-4'>
              <MaterialCommunityIcons name='cart-variant' size={40} color='#fff' />
              <ThemedText className='!text-lg font-bold'>{t('home.shop_our_products')}</ThemedText>
            </CardContainer>
          </TouchableOpacity>
        </ThemedView>
      </Container>
    </ThemedView>
  );
};

export default WhatDoYouWantTodaySection;
