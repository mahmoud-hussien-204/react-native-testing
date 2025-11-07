import Container from '@/components/container';

import CoverHeader from '@/components/cover-header';

import Skeleton from '@/components/skeleton';

import { ThemedText } from '@/components/themed-text';

import { ThemedView } from '@/components/themed-view';

import { fakeData_products } from '@/constants/fakeData';

import { AntDesign } from '@expo/vector-icons';

import { Image } from 'expo-image';

import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { FlatList, Linking, TouchableOpacity, View } from 'react-native'; // three cards in a row

const ProductsPage = () => {
  const { t } = useTranslation();

  return (
    <ThemedView className='flex-1 bg-background'>
      {/* ===== Cover Header ===== */}
      <CoverHeader
        title={t('products.title')}
        imageUrl='https://commabarber.com/_next/image?url=https%3A%2F%2Fmedia.commabarber.com%2Fcomma%2Ffeatures%2F01JVYWX3RS5KXF7P3SPYYPF534.png&w=1080&q=75'
      />
      <Container className='mt-12 flex-1'>
        {/* ===== Subscriptions List ===== */}
        {fakeData_products.length > 0 ? (
          <FlatList
            data={fakeData_products}
            keyExtractor={(item) => item.id}
            numColumns={3}
            contentContainerClassName='pb-16'
            columnWrapperClassName='justify-between mb-4'
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <ProductCard item={item} />}
          />
        ) : (
          <View className='flex-1 items-center justify-center'>
            <AntDesign name='product' size={95} className='mb-8 !text-text' />
            <ThemedText className='!text-xl text-text-secondary'>{t('products.empty')}</ThemedText>
          </View>
        )}
      </Container>
    </ThemedView>
  );
};

export default ProductsPage;

const ProductCard = ({ item }: { item: IProduct }) => {
  const handleOpenLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {!imageLoaded && <Skeleton className='h-[120px] w-full' />}
      <TouchableOpacity activeOpacity={0.8} onPress={() => handleOpenLink(item.linkUrl)}>
        <Image
          source={{ uri: item.imageUrl }}
          contentFit='cover'
          transition={400}
          style={{ height: 120 }}
          onLoadEnd={() => setImageLoaded(true)}
        />

        <View className='mt-2 items-center'>
          <ThemedText className='text-center text-sm font-semibold text-white' numberOfLines={1}>
            {item.title}
          </ThemedText>
          <ThemedText className='mt-1 text-xs text-gray-400'>{item.price}</ThemedText>
        </View>
      </TouchableOpacity>
    </>
  );
};
