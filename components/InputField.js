import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

export default function InputField(props) {
  return <TextInput {...props} style={[styles.input, props.style]} />;
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