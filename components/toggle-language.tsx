import i18n, { changeLanguage } from '@/i18n';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import { ThemedText } from './themed-text';

const ToggleLanguage = () => {
  const { t } = useTranslation();

  const handleLanguageSwitch = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    changeLanguage(newLang);
  };

  return (
    <TouchableOpacity onPress={handleLanguageSwitch} activeOpacity={0.7}>
      <ThemedText className='text-sm'>
        {t('home')} ({i18n.language.toUpperCase()})
      </ThemedText>
    </TouchableOpacity>
  );
};

export default ToggleLanguage;
