import { ThemedText } from '@/components/themed-text';

import { ThemedView } from '@/components/themed-view';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Modal, TextInput, TouchableOpacity, View } from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
};

export default function RateModal({ visible, onClose, onSubmit }: Props) {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [nickname, setNickname] = useState('');

  const handleRate = (val: number) => setRating(val);

  return (
    <Modal visible={visible} transparent animationType='slide' onRequestClose={onClose}>
      <View className='flex-1 justify-end bg-black/50'>
        <ThemedView className='rounded-t-3xl bg-background-secondary px-4 py-6'>
          {/* Header */}
          <View className='mb-4 flex-row items-center justify-between border-b border-neutral-800 pb-3'>
            <TouchableOpacity onPress={onClose}>
              <ThemedText className='text-primary'>{t('global.cancel')}</ThemedText>
            </TouchableOpacity>
            <ThemedText className='font-semibold text-white'>
              {t('settings.rate_header')}
            </ThemedText>
            <TouchableOpacity onPress={() => onSubmit({ rating, title, review, nickname })}>
              <ThemedText className='text-primary'>{t('global.submit')}</ThemedText>
            </TouchableOpacity>
          </View>

          {/* Stars */}
          <View className='mb-4 flex-row justify-center'>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => handleRate(star)}>
                <MaterialIcons
                  name={star <= rating ? 'star' : 'star-border'}
                  size={30}
                  color={star <= rating ? '#FFD700' : '#777'}
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Inputs */}
          <TextInput
            placeholder={t('settings.title_placeholder')}
            placeholderTextColor='#777'
            value={title}
            onChangeText={setTitle}
            className='mb-3 rounded-lg bg-[#222] px-4 py-2 text-white'
          />
          <TextInput
            placeholder={t('settings.review_placeholder')}
            placeholderTextColor='#777'
            value={review}
            onChangeText={setReview}
            multiline
            numberOfLines={3}
            className='mb-3 rounded-lg bg-[#222] px-4 py-2 text-white'
          />
          <TextInput
            placeholder={t('settings.nickname_placeholder')}
            placeholderTextColor='#777'
            value={nickname}
            onChangeText={setNickname}
            className='rounded-lg bg-[#222] px-4 py-2 text-white'
          />
        </ThemedView>
      </View>
    </Modal>
  );
}
