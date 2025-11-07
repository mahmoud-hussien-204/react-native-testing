import { TouchableOpacity } from 'react-native';

import { ThemedView } from './themed-view';

import AntDesign from '@expo/vector-icons/AntDesign';

import Entypo from '@expo/vector-icons/Entypo';

import { router } from 'expo-router';

const Header = () => {
  return (
    <ThemedView className='flex-row-reverse items-center gap-4 p-4'>
      <TouchableOpacity onPress={() => router.push('/notifications')} activeOpacity={0.7}>
        <AntDesign name='bell' size={20} color='#fff' />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log('location')} activeOpacity={0.7}>
        <Entypo name='location-pin' size={22} color='#fff' />
      </TouchableOpacity>
    </ThemedView>
  );
};

export default Header;
