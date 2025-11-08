import { ThemedText } from '@/components/themed-text';

import { ThemedView } from '@/components/themed-view';

import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Modal, TouchableOpacity, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (lang: 'en' | 'ar') => void;
};

const langs = [
  { id: 'en', label: 'English' },
  { id: 'ar', label: 'العربية' },
];

export default function LanguageModal({ visible, onClose, onSubmit }: Props) {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState<'en' | 'ar'>(i18n.language as 'en' | 'ar');

  return (
    <Modal visible={visible} transparent animationType='slide' onRequestClose={onClose}>
      <View className='flex-1 justify-end bg-background/50'>
        <ThemedView className='rounded-t-3xl bg-background-secondary px-4 py-6'>
          {/* Header */}
          <View className='mb-6 flex-row items-center justify-between'>
            <ThemedText className='!text-lg font-semibold'>
              {t('settings.select_language')}
            </ThemedText>
            <TouchableOpacity onPress={onClose}>
              <AntDesign name='close-circle' size={20} className='!text-text/40' />
            </TouchableOpacity>
          </View>

          {/* Language Options */}
          <View className='mb-6'>
            {langs.map((lang, index) => (
              <TouchableOpacity
                key={lang.id}
                activeOpacity={0.7}
                onPress={() => setSelected(lang.id as 'en' | 'ar')}
                className={`flex-row items-center justify-between ${index === 0 ? 'border-b border-b-white/10' : ''} py-4`}
              >
                <ThemedText className='!text-lg'>{lang.label}</ThemedText>
                <View
                  className={`h-5 w-5 rounded-full border ${
                    selected === lang.id ? 'border-white bg-white' : 'border-gray-500'
                  }`}
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Footer Button */}
          <TouchableOpacity
            onPress={() => onSubmit(selected)}
            activeOpacity={0.8}
            className='rounded-lg bg-white py-3'
          >
            <ThemedText className='text-center !text-lg font-semibold !text-black'>
              {t('settings.submit')}
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </View>
    </Modal>
  );
}
