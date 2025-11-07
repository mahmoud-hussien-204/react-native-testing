import { ThemedText } from '@/components/themed-text';

import { Image } from 'expo-image';

import { router } from 'expo-router';

import { Linking, TouchableOpacity, View } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import { CardContainer } from './card';

import { getStatusColor } from '@/utils';

import { useTranslation } from 'react-i18next';

import { ThemedView } from './themed-view';

import { useState } from 'react';

import Skeleton from './skeleton';

type Props = {
  item: IBranch;
  onPress?: (id: string) => void;
};

export default function BranchCard({ item, onPress }: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handlePress = () => {
    if (onPress) onPress(item.id);
    else router.push(`/branches/${item.id}`);
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
      <CardContainer className='w-72 !px-0 !py-0'>
        {!imageLoaded && <Skeleton className='h-[130px] w-full' />}

        <Image
          source={item.cover}
          contentFit='cover'
          contentPosition='center'
          style={{ height: 130 }}
          onLoadEnd={() => setImageLoaded(true)}
        />

        <ThemedView className='p-4'>
          <ThemedText className='mb-2 font-semibold'>{item.name}</ThemedText>
          <View className='mb-1 flex-row items-center gap-1'>
            <Entypo name='location-pin' size={15} className='!text-primary' />
            <ThemedText className='mb-1 font-semibold text-text-secondary'>
              {item.address}
            </ThemedText>
          </View>
          <View className='flex-row justify-between'>
            <BranchCardPhone phone={item.phone} />
            <BranchCardStatus status={item.status} />
          </View>
        </ThemedView>
      </CardContainer>
    </TouchableOpacity>
  );
}

export const BranchCardPhone = ({ phone }: Pick<IBranch, 'phone'>) => (
  <TouchableOpacity
    onPress={() => Linking.openURL(`tel:${phone}`)}
    activeOpacity={0.7}
    className='flex-row items-center gap-1'
  >
    <Entypo name='phone' size={15} className='!text-primary' />
    <ThemedText className='text-text-secondary'>{phone}</ThemedText>
  </TouchableOpacity>
);

export const BranchCardStatus = ({ status }: Pick<IBranch, 'status'>) => {
  const { t } = useTranslation();
  const statusColor = getStatusColor(status);

  return (
    <ThemedText className={`font-semibold ${statusColor}`}>{t(`status.${status}`)}</ThemedText>
  );
};
