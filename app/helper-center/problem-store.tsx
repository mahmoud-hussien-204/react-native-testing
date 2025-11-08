import { CardContainer } from '@/components/card';
import Container from '@/components/container';
import GoToBackHeader from '@/components/go-to-back-header';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput, TouchableOpacity, View } from 'react-native';

export default function ProblemInStorePage() {
  const { t } = useTranslation();
  const [branch, setBranch] = useState<string>('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const branches = [
    { label: t('branches.branch1', 'Branch 1 - Cairo'), value: 'cairo' },
    { label: t('branches.branch2', 'Branch 2 - Alexandria'), value: 'alexandria' },
    { label: t('branches.branch3', 'Branch 3 - Giza'), value: 'giza' },
  ];

  const handleSubmit = () => {
    console.log('Store Problem Submitted:', { branch, phone, description, image });
    alert(t('helper_center.problem_submitted'));
    setBranch('');
    setPhone('');
    setDescription('');
    setImage(null);
  };

  return (
    <ThemedView className='flex-1 bg-background'>
      <Container>
        <GoToBackHeader title={t('helper_center.problem_in_store')} />

        {/* ===== Content Card ===== */}
        <CardContainer className='mt-8'>
          {/* Instruction Text */}
          <ThemedText className='mb-6 !text-base leading-6 text-text-secondary'>
            {t(
              'helper_center.problem_in_store_text',
              'يرجى مشاركة تفاصيل المشكلة الخاصة بالفرع وسيقوم فريق الدعم لدينا بالرد عليك في أقرب وقت ممكن'
            )}
          </ThemedText>

          {/* Branch Selector */}
          <View className='mb-6'>
            <ThemedText className='mb-2 !text-base font-medium !text-text-secondary'>
              {t('helper_center.branch_label', 'الفرع')}
            </ThemedText>
            <View className='rounded-xl border border-white'>
              <Picker
                selectedValue={branch}
                onValueChange={(itemValue) => setBranch(itemValue)}
                dropdownIconColor='#fff'
                style={{
                  color: '#fff',
                  backgroundColor: '#1e1e1e',
                  borderRadius: 10,
                }}
              >
                <Picker.Item label={t('helper_center.select_branch', 'اختر الفرع')} value='' />
                {branches.map((b) => (
                  <Picker.Item key={b.value} label={b.label} value={b.value} />
                ))}
              </Picker>
            </View>
          </View>

          {/* Phone Number Field */}
          <View className='mb-6'>
            <ThemedText className='mb-2 !text-base font-medium !text-text-secondary'>
              {t('helper_center.phone_label', 'رقم الهاتف')}
            </ThemedText>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              keyboardType='phone-pad'
              placeholder={t('helper_center.phone_placeholder', 'اكتب رقم الهاتف')}
              placeholderTextColor='#d1d5db'
              className='rounded-xl border border-white p-3 text-base text-white'
            />
          </View>

          {/* Problem Description Field */}
          <View className='mb-6'>
            <ThemedText className='mb-2 !text-base font-medium !text-text-secondary'>
              {t('helper_center.problem_label', 'المشكلة')}
            </ThemedText>
            <TextInput
              value={description}
              onChangeText={setDescription}
              multiline
              placeholder={t('helper_center.problem_placeholder', 'اكتب تفاصيل المشكلة هنا...')}
              placeholderTextColor='#d1d5db'
              className='min-h-[120px] rounded-xl border border-white p-3 text-base text-white'
              style={{
                textAlignVertical: 'top',
              }}
            />
          </View>
        </CardContainer>

        {/* ===== Submit Button ===== */}
        <TouchableOpacity
          onPress={handleSubmit}
          activeOpacity={0.8}
          className='mt-8 rounded-xl bg-white py-4'
        >
          <ThemedText className='text-center !text-lg font-semibold text-black'>
            {t('helper_center.send_problem', 'ارسل المشكلة')}
          </ThemedText>
        </TouchableOpacity>
      </Container>
    </ThemedView>
  );
}
