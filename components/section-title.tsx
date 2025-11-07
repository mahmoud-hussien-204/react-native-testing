import { LinkProps, router } from 'expo-router';

import { useTranslation } from 'react-i18next';

import { ThemedText } from './themed-text';

import { ThemedView } from './themed-view';

import AntDesign from '@expo/vector-icons/AntDesign';

import { TouchableOpacity } from 'react-native';

interface IProps {
  title: string;
  sellAllUrl?: LinkProps['href'];
}

const SectionTitle = ({ title, sellAllUrl }: IProps) => {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.dir() === 'rtl';

  return (
    <ThemedView className='mb-4 flex-row items-center justify-between'>
      <ThemedText className='text-text-secondary'>{title}</ThemedText>;
      {sellAllUrl && (
        <TouchableOpacity
          className='flex-row items-center gap-2'
          onPress={() => router.push(sellAllUrl)}
        >
          <ThemedText className='text-text-secondary'>{t('global.see_all')}</ThemedText>
          <AntDesign
            name={isRTL ? 'arrow-left' : 'arrow-right'}
            size={14}
            className='!text-text-secondary'
          />
        </TouchableOpacity>
      )}
    </ThemedView>
  );
};

export default SectionTitle;
