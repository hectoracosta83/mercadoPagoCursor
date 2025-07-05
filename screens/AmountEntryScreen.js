import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS, SIZES } from '../theme';

export default function AmountEntryScreen({ route, navigation }) {
  const { recipient } = route.params;
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleContinue = () => {
    const value = parseFloat(amount.replace(',', '.'));
    if (isNaN(value) || value <= 0) return;
    if (isNaN(value) || value <= 0) {
      setError('Ingresá un monto válido');
      return;
    }
    setError('');
    navigation.navigate('Confirm', { recipient, amount: value });
  };

  return (
    <View style={styles.container}>
      <HeaderBar title="Ingresá el monto" navigation={navigation} />
      <Text style={styles.title}>Ingresá el monto</Text>
      <InputField
        keyboardType="numeric"
        placeholder="$ 0,00"
        value={amount}
        onChangeText={text => {
          setAmount(text);
          if (error) setError('');
        }}
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <PrimaryButton title="Continuar" onPress={handleContinue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    marginBottom: 12,
  },
  input: {
    marginBottom: SIZES.base * 2,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});