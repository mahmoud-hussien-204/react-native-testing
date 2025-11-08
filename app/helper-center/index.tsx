import { CardContainer } from '@/components/card';

import Container from '@/components/container';

import GoToBackHeader from '@/components/go-to-back-header';

import SectionTitle from '@/components/section-title';

import { ThemedText } from '@/components/themed-text';

import { ThemedView } from '@/components/themed-view';

import { fakeData_faq } from '@/constants/fakeData';

import { MaterialIcons } from '@expo/vector-icons';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { router } from 'expo-router';

import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { LayoutAnimation, ScrollView, TouchableOpacity, View } from 'react-native';

export default function HelperCenterPage() {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <ThemedView className='flex-1 bg-background'>
      <Container className='flex-1'>
        {/* ===== Header ===== */}
        <GoToBackHeader title={t('helper_center.title')} />

        <ScrollView
          className='mt-8 flex-1 bg-background'
          contentContainerClassName='flex-grow pb-16'
          showsVerticalScrollIndicator={false}
        >
          {/* ===== Have a Problem Section ===== */}
          <SectionTitle title={t('helper_center.have_problem')} />

          <ThemedView className='flex-row gap-4'>
            {/* Problem in App */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push('/helper-center/problem-app')}
              className='flex-1'
            >
              <CardContainer className='items-center justify-center gap-4'>
                <FontAwesome5 name='mobile-alt' size={40} color='#fff' />
                <ThemedText className='text-center !text-lg font-bold'>
                  {t('helper_center.problem_in_app')}
                </ThemedText>
              </CardContainer>
            </TouchableOpacity>

            {/* Problem in Store */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push('/helper-center/problem-store')}
              className='flex-1'
            >
              <CardContainer className='flex-1 items-center justify-center gap-4'>
                <MaterialCommunityIcons name='store-outline' size={40} color='#fff' />
                <ThemedText className='text-center !text-lg font-bold'>
                  {t('helper_center.problem_in_store')}
                </ThemedText>
              </CardContainer>
            </TouchableOpacity>
          </ThemedView>

          {/* ===== FAQ Section ===== */}
          <ThemedView className='mt-10'>
            <SectionTitle title={t('helper_center.faq_title')} />

            <ThemedView>
              {fakeData_faq.map((faq, index) => {
                const isActive = index === activeIndex;
                return (
                  <TouchableOpacity
                    key={faq.id}
                    activeOpacity={0.8}
                    onPress={() => toggleAccordion(index)}
                    className='mb-4'
                  >
                    <CardContainer className='bg-background-secondary'>
                      {/* Question row */}
                      <View className='flex-row items-center justify-between'>
                        <ThemedText className='flex-1 !text-lg font-semibold'>
                          {faq.question}
                        </ThemedText>
                        <MaterialIcons
                          name={isActive ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                          size={22}
                          className='!text-text-secondary/50'
                        />
                      </View>

                      {/* Answer */}
                      {isActive && (
                        <ThemedText className='mt-8 !text-base leading-5 !text-text-secondary'>
                          {faq.answer}
                        </ThemedText>
                      )}
                    </CardContainer>
                  </TouchableOpacity>
                );
              })}
            </ThemedView>
          </ThemedView>
        </ScrollView>
      </Container>
    </ThemedView>
  );
}
