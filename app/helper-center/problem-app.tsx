import { CardContainer } from '@/components/card';
import Container from '@/components/container';
import GoToBackHeader from '@/components/go-to-back-header';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';

export default function ProblemInAppPage() {
  const { t } = useTranslation();
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert(t('helper_center.image_permission', 'Permission to access media library is required.'));
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    console.log('Problem submitted:', { description, image });
    alert(t('helper_center.problem_submitted'));
    setDescription('');
    setImage(null);
  };

  return (
    <ThemedView className='flex-1 bg-background'>
      <Container>
        <GoToBackHeader title={t('helper_center.problem_in_app')} />

        {/* ===== Content Card ===== */}
        <CardContainer className='mt-8'>
          {/* Instruction Text */}
          <ThemedText className='mb-6 !text-base leading-6 text-text-secondary'>
            {t('helper_center.problem_in_app_text')}
          </ThemedText>

          {/* Problem Description Field */}
          <View className='mb-6'>
            <ThemedText className='mb-2 !text-base font-medium !text-text-secondary'>
              {t('helper_center.problem_label')}
            </ThemedText>
            <TextInput
              value={description}
              onChangeText={setDescription}
              multiline
              placeholder={t('helper_center.problem_placeholder')}
              placeholderTextColor='#d1d5db'
              className='min-h-[120px] rounded-xl  border border-white p-3 text-base text-white'
              style={{
                textAlignVertical: 'top',
              }}
            />
          </View>

          {/* Attach Image */}
          <View>
            <TouchableOpacity
              onPress={pickImage}
              activeOpacity={0.8}
              className='flex-row items-center justify-center gap-2 rounded-xl bg-[#636363] py-3'
            >
              <MaterialIcons name='photo-camera' size={22} className='!text-text' />
              <ThemedText className='!text-lg font-medium'>
                {t('helper_center.attach_image')}
              </ThemedText>
            </TouchableOpacity>

            {image && (
              <View className='mt-3 items-center'>
                <Image
                  source={{ uri: image }}
                  style={{ width: 120, height: 120, borderRadius: 10 }}
                />
              </View>
            )}
          </View>
        </CardContainer>

        {/* ===== Submit Button ===== */}
        <TouchableOpacity
          onPress={handleSubmit}
          activeOpacity={0.8}
          className='mt-8 rounded-xl bg-white py-4'
        >
          <ThemedText className='text-center !text-lg font-semibold text-black'>
            {t('helper_center.send_problem')}
          </ThemedText>
        </TouchableOpacity>
      </Container>
    </ThemedView>
  );
}
