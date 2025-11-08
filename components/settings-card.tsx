import { ThemedText } from '@/components/themed-text';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { I18nManager, TouchableOpacity, View } from 'react-native';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  onPress: () => void;
  iconClassName?: string;
};

const SettingsCard = ({ icon, title, onPress, iconClassName }: Props) => {
  const isRTL = I18nManager.isRTL;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className=' flex-row items-center justify-between '
    >
      <View className='flex-row items-center gap-3'>
        <MaterialIcons
          name={icon}
          size={26}
          className={`${iconClassName ? iconClassName : '!text-text'}`}
        />
        <ThemedText className='!text-lg font-medium'>{title}</ThemedText>
      </View>
      <MaterialIcons
        name={isRTL ? 'arrow-back-ios' : 'arrow-forward-ios'}
        size={18}
        className='!text-text-secondary'
      />
    </TouchableOpacity>
  );
};

export default SettingsCard;
