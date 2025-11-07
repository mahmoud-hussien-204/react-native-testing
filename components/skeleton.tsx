import { useEffect, useRef } from 'react';

import { Animated, ViewProps } from 'react-native';

const Skeleton = ({ className, style }: ViewProps & { className?: string }) => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.3, duration: 800, useNativeDriver: true }),
      ])
    ).start();
  }, [opacity]);

  return (
    <Animated.View style={[{ opacity }]} className={`rounded-md bg-neutral-800 ${className}`} />
  );
};

export default Skeleton;
