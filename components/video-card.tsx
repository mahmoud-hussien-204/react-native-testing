import { ThemedText } from '@/components/themed-text';

import { Image } from 'expo-image';

import { Linking, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { useState } from 'react';

import Skeleton from './skeleton';

type Props = {
  item: IVideo;
  onPress?: (id: string) => void;
};

export default function VideoCard({ item, onPress }: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const openVideo = async () => {
    try {
      await Linking.openURL(item.url);
    } catch (e) {
      console.warn('Cannot open video', e);
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={openVideo}>
      <View className='w-72 rounded-2xl'>
        {!imageLoaded && <Skeleton className='h-[130px] w-full' />}
        <View className='relative'>
          <Image
            source={item.cover}
            contentFit='cover'
            contentPosition='center'
            style={{ height: 130, borderRadius: 16 }}
            onLoadEnd={() => setImageLoaded(true)}
          />

          <View className='absolute inset-0 bg-black/40'></View>

          <View className='absolute start-4 top-4 flex size-12 items-center justify-center rounded-full border border-white'>
            <Ionicons name='play' size={18} className='!text-white' />
          </View>
        </View>

        <View className='p-4'>
          <ThemedText className='text-center !text-xl font-semibold' numberOfLines={2}>
            {item.title}
          </ThemedText>
        </View>
      </View>
    </TouchableOpacity>
  );
}
