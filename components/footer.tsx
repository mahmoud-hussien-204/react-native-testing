import { Ionicons } from '@expo/vector-icons';

import { router, usePathname } from 'expo-router';

import { useTranslation } from 'react-i18next';

import { TouchableOpacity, View } from 'react-native';

import { ThemedText } from './themed-text';

const tabs = [
  { name: 'subscriptions', icon: 'cut', title: 'nav.subscriptions' },
  { name: 'home', icon: 'home-outline', title: 'nav.home' },
  { name: 'profile', icon: 'person-outline', title: 'nav.profile' },
];

const Footer = () => {
  const pathname = usePathname();

  const { t } = useTranslation();

  return (
    <View className='flex-row items-end justify-between bg-background-secondary px-4 py-3'>
      {tabs.map((tab) => {
        const isActive = pathname === `/${tab.name}` || (tab.name === 'home' && pathname === '/');
        return (
          <TouchableOpacity
            key={tab.name}
            activeOpacity={0.8}
            // @ts-ignore
            onPress={() => router.push(tab.name === 'home' ? '/' : `/${tab.name}`)}
            className='relative items-center justify-end gap-3 text-center'
          >
            {/* Icon container */}
            <View
              style={{
                ...(isActive
                  ? {
                      backgroundColor: '#000',
                      borderRadius: '50%',
                      padding: 12,
                      position: 'absolute',
                      bottom: 0,
                      transform: 'translateY(-32px)',
                    }
                  : {}),
              }}
            >
              <View
                style={{
                  ...(isActive
                    ? {
                        backgroundColor: '#fff',
                        borderRadius: '50%',
                        width: 64,
                        height: 64,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }
                    : {}),
                }}
              >
                <Ionicons
                  name={tab.icon as any}
                  size={isActive ? 24 : 22}
                  color={isActive ? '#000' : '#9ca3af'}
                />
              </View>
            </View>

            {/* Label */}
            <ThemedText
              style={{
                ...(isActive
                  ? {
                      color: '#fff',
                      fontWeight: 500,
                    }
                  : {
                      color: '#9ca3af',
                    }),
              }}
            >
              {t(tab.title)}
            </ThemedText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Footer;
