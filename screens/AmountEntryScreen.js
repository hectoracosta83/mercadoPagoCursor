import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function AmountEntryScreen({ route, navigation }) {
  const { recipient } = route.params;
  const [amount, setAmount] = useState('');

  const handleContinue = () => {
    const value = parseFloat(amount.replace(',', '.'));
    if (isNaN(value) || value <= 0) return;
    navigation.navigate('Confirm', { recipient, amount: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresá el monto</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="$ 0,00"
        value={amount}
        onChangeText={setAmount}
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continuar</Text>
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
  title: {
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
});