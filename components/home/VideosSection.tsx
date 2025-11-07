import Container from '@/components/container';

import SectionTitle from '@/components/section-title';

import { ThemedView } from '@/components/themed-view';

import { fakeData_videos } from '@/constants/fakeData';

import { useTranslation } from 'react-i18next';

import { FlatList, View } from 'react-native';

import VideoCard from '../video-card';

export default function VideosSection() {
  const { t } = useTranslation();

  return (
    <ThemedView className='mt-8'>
      <Container>
        <SectionTitle title={t('global.advices')} />
        <ThemedView>
          <FlatList
            data={fakeData_videos}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className='w-4' />}
            renderItem={({ item }) => <VideoCard item={item} />}
          />
        </ThemedView>
      </Container>
    </ThemedView>
  );
}
