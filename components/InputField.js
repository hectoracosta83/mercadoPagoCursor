import React from 'react';
import { TextInput, StyleSheet, Platform } from 'react-native';
import { COLORS } from '../theme';

export default function InputField({ style, placeholderTextColor = COLORS.divider, ...rest }) {
  return (
    <TextInput
      {...rest}
      keyboardType={rest.keyboardType || (Platform.OS === 'ios' ? 'number-pad' : 'numeric')}
      maxLength={rest.maxLength || 9}
      style={[styles.input, style]}
      placeholderTextColor={placeholderTextColor}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: COLORS.divider,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 20,
  },
});