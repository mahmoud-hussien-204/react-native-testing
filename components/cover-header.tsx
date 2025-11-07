import { View } from 'react-native';

import { Image } from 'expo-image';

import { ThemedText } from '@/components/themed-text';

type IProps = {
  title: string;
  imageUrl: string;
  height?: number;
};

const CoverHeader = ({ title, imageUrl, height = 120 }: IProps) => {
  return (
    <View className='relative w-full'>
      <Image source={{ uri: imageUrl }} contentFit='cover' style={{ height }} transition={600} />
      <View className='absolute inset-0 items-center justify-center bg-black/30'>
        <ThemedText className='text-center !text-2xl font-bold'>{title}</ThemedText>
      </View>
    </View>
  );
};

export default CoverHeader;
