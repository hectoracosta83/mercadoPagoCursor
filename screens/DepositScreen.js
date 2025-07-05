import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import PrimaryButton from '../components/PrimaryButton';
import { COLORS, SIZES } from '../theme';

export default function DepositScreen({ navigation, balance, setBalance }) {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleConfirm = () => {
    const value = parseFloat(amount.replace(',', '.'));
    if (isNaN(value) || value <= 0) {
      setError('Ingresá un monto válido');
      return;
    }
    setError('');
    setBalance(prev => prev + value);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <HeaderBar title="Ingresar dinero" navigation={navigation} />
      <Text style={styles.label}>Ingresá el monto</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="$ 0,00"
        value={amount}
        onChangeText={text => {
          setAmount(text);
          if (error) setError('');
        }}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <PrimaryButton title="Confirmar" onPress={handleConfirm} />
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
  label: {
    fontSize: 22,
    marginVertical: SIZES.base * 2,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.divider,
    borderRadius: 6,
    padding: 14,
    fontSize: 20,
    marginBottom: SIZES.base * 2,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});