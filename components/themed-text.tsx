import { Text, type TextProps } from 'react-native';

export function ThemedText({ className, ...rest }: TextProps) {
  return <Text className={`font-ibm !text-base text-text ${className}`} {...rest} />;
}
