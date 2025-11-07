import { FlatList, Linking, TouchableOpacity, View } from 'react-native';

import { Image } from 'expo-image';

import { ThemedView } from '@/components/themed-view';

import { fakeData_memberships } from '@/constants/fakeData';

import Container from '@/components/container';

import CoverHeader from '@/components/cover-header';

import Skeleton from '@/components/skeleton';

import { useState } from 'react';

import { ThemedText } from '@/components/themed-text';

import { AntDesign } from '@expo/vector-icons';

import { useTranslation } from 'react-i18next';

export default function SubscriptionsPage() {
  const { t } = useTranslation();

  return (
    <ThemedView className='flex-1 bg-background'>
      {/* ===== Cover Header ===== */}
      <CoverHeader
        title={t('subscriptions.title')}
        imageUrl='https://commabarber.com/_next/static/media/products-cover.151a73da.jpg'
      />
      <Container className='mt-12 flex-1'>
        {/* ===== Subscriptions List ===== */}
        {fakeData_memberships.length > 0 ? (
          <FlatList
            data={fakeData_memberships}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className='h-8' />}
            contentContainerClassName='pb-16'
            renderItem={({ item }) => <MemberShipCard item={item} />}
          />
        ) : (
          <View className='flex-1 items-center justify-center'>
            <AntDesign name='product' size={95} className='mb-8 !text-text' />
            <ThemedText className='!text-xl text-text-secondary'>
              {t('subscriptions.empty')}
            </ThemedText>
          </View>
        )}
      </Container>
    </ThemedView>
  );
}

const MemberShipCard = ({ item }: { item: IMemberShip }) => {
  const handleOpenLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {!imageLoaded && <Skeleton className='h-[200px] w-full' />}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handleOpenLink(item.linkUrl)}
        className='overflow-hidden rounded-xl bg-[#1b1b1b]'
      >
        <Image
          source={{ uri: item.imageUrl }}
          contentFit='cover'
          transition={500}
          style={{ height: 200 }}
          onLoadEnd={() => setImageLoaded(true)}
        />
      </TouchableOpacity>
    </>
  );
};
