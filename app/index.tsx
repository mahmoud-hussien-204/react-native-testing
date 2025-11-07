import Header from '@/components/header';

import BranchesSection from '@/components/home/BranchesSection';

import SubscriptionsSection from '@/components/home/SubscriptionsSection';

import VideosSection from '@/components/home/VideosSection';

import WhatDoYouWantTodaySection from '@/components/home/WhatDoYouWantTodaySection';

import { ThemedView } from '@/components/themed-view';

import { ScrollView } from 'react-native';

const HomePage = () => {
  return (
    <>
      {/* Fixed Header */}
      <Header />
      <ThemedView className='flex-1 bg-background'>
        <ScrollView
          className='flex-1 bg-background'
          contentContainerClassName='flex-grow pb-16'
          showsVerticalScrollIndicator={false}
        >
          <WhatDoYouWantTodaySection />
          <SubscriptionsSection />
          <BranchesSection />
          <VideosSection />
        </ScrollView>
      </ThemedView>
    </>
  );
};

export default HomePage;
