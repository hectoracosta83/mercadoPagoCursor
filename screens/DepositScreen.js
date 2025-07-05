import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import HeaderBar from '../components/HeaderBar';

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
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
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
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#009ee3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});