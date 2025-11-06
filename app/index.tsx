import BranchesSection from '@/components/home/BranchesSection';

import SubscriptionsSection from '@/components/home/SubscriptionsSection';

import WhatDoYouWantTodaySection from '@/components/home/WhatDoYouWantTodaySection';

import { ThemedView } from '@/components/themed-view';

const HomePage = () => {
  return (
    <ThemedView>
      <WhatDoYouWantTodaySection />
      <SubscriptionsSection />
      <BranchesSection />
    </ThemedView>
  );
};

export default HomePage;
