import { ThemedText } from '@/components/themed-text';

import { ThemedView } from '@/components/themed-view';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { router } from 'expo-router';

import { useTranslation } from 'react-i18next';

import { TouchableOpacity } from 'react-native';

type Props = {
  title: string;
  onBack?: () => void;
  showBack?: boolean;
};

const GoToBackHeader = ({ title, onBack, showBack = true }: Props) => {
  const { i18n } = useTranslation();

  const isRTL = i18n.dir() === 'rtl';

  const handleBack = () => {
    if (onBack) onBack();
    else router.back();
  };

  return (
    <ThemedView className='flex-row items-center py-4'>
      {showBack && (
        <TouchableOpacity onPress={handleBack} activeOpacity={0.7} className='me-3'>
          <MaterialIcons
            name={isRTL ? 'arrow-forward' : 'arrow-back'}
            size={22}
            className='!text-text'
          />
        </TouchableOpacity>
      )}

      <ThemedText className='!text-xl font-semibold'>{title}</ThemedText>
    </ThemedView>
  );
};

export default GoToBackHeader;
