import { Ionicons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ThemedText } from './themed-text';

const tabs = [
  { name: 'subscriptions', icon: 'card-outline', title: 'Subscriptions' },
  { name: 'home', icon: 'home-outline', title: 'Home' },
  { name: 'profile', icon: 'person-outline', title: 'Profile' },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <View className='bg-background-secondary flex-row items-center justify-around border-t border-neutral-800 py-3'>
      {tabs.map((tab) => {
        const isActive = pathname === `/${tab.name}` || (tab.name === 'home' && pathname === '/');
        return (
          <TouchableOpacity
            key={tab.name}
            activeOpacity={0.8}
            onPress={() => router.push(tab.name === 'home' ? '/' : `/${tab.name}`)}
            className='relative items-center justify-center'
          >
            {/* Icon container */}
            <View
              className={`${
                isActive
                  ? 'bg-background border-background-secondary -translate-y-3 rounded-full border p-3'
                  : ''
              }`}
            >
              <Ionicons name={tab.icon as any} size={22} color={isActive ? '#fff' : '#9ca3af'} />
            </View>

            {/* Label */}
            <ThemedText
              className={`mt-1 text-xs ${isActive ? 'font-semibold text-white' : 'text-gray-400'}`}
            >
              {tab.title}
            </ThemedText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Footer;
