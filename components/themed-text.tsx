import { Text, type TextProps } from 'react-native';

export function ThemedText({ className, ...rest }: TextProps) {
  return <Text className={`font-arFont !text-base text-text ${className}`} {...rest} />;
}
