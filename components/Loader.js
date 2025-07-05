import React, { useEffect, useRef } from 'react';
import { View, ActivityIndicator, StyleSheet, Animated, Easing } from 'react-native';
import { COLORS } from '../theme';

export default function Loader() {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 150,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();

    return () => opacity.setValue(0);
  }, []);

  return (
    <Animated.View style={[styles.overlay, { opacity }]} pointerEvents="none">
      <ActivityIndicator size="large" color={COLORS.primary} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});