import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../theme';

export default function PrimaryButton({ title, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && { opacity: 0.5 }]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.base * 2,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: SIZES.base,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { height: 1, width: 0 },
    shadowRadius: 2,
    elevation: 3,
  },
  text: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONTS.bold,
  },
});