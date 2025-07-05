import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../theme';

export default function PrimaryButton({ title, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledBtn]}
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
    height: 48,
    justifyContent: 'center',
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
  disabledBtn: {
    backgroundColor: '#B3E2F9',
  },
});