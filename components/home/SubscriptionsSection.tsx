import React from 'react';

import { useTranslation } from 'react-i18next';

import { TouchableOpacity } from 'react-native';

import { CardContainer } from '../card';

import Container from '../container';

import SectionTitle from '../section-title';

import { ThemedText } from '../themed-text';

import { ThemedView } from '../themed-view';

const SubscriptionsSection = () => {
  const { t } = useTranslation();
  return (
    <ThemedView className='mt-8'>
      <Container>
        <SectionTitle title={t('home.subscriptions_and_wallats')} />
        <ThemedView className='flex-row gap-4'>
          <TouchableOpacity
            onPress={() => console.log('subscribe')}
            activeOpacity={0.7}
            className='flex-1'
          >
            <CardContainer className='flex-row items-center gap-4'>
              <ThemedText className='flex-1 !text-lg font-bold'>
                {t('home.subscribe_limit')}
              </ThemedText>
              <ThemedView className='flex-1'>
                {/* <Image
                  source={require('@/assets/images/react-logo.png')}
                  contentFit='contain'
                  style={{ height: 70 }}
                /> */}
              </ThemedView>
            </CardContainer>
          </TouchableOpacity>
        </ThemedView>
      </Container>
    </ThemedView>
  );
};

export default SubscriptionsSection;
