import Container from '@/components/container';

import SectionTitle from '@/components/section-title';

import { ThemedView } from '@/components/themed-view';

import { fakeData_branches } from '@/constants/fakeData';

import { useTranslation } from 'react-i18next';

import { FlatList, View } from 'react-native';

import BranchCard from '../branch-card';

export default function BranchesSection() {
  const { t } = useTranslation();

  return (
    <ThemedView className='mt-8'>
      <Container>
        <SectionTitle title={t('global.branches')} />
        <ThemedView>
          <FlatList
            data={fakeData_branches}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className='w-4' />}
            renderItem={({ item }) => <BranchCard item={item} />}
          />
        </ThemedView>
      </Container>
    </ThemedView>
  );
}
