import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HeaderBar from '../components/HeaderBar';

export default function ConfirmationScreen({ route, navigation, balance, setBalance }) {
  const { recipient, amount } = route.params;

  const handleTransfer = () => {
    if (balance < amount) {
      alert('Saldo insuficiente');
      return;
    }
    setBalance(prev => prev - amount);
    navigation.navigate('Receipt', {
      recipient,
      amount,
      opId: Date.now().toString(36),
    });
  };

  return (
    <View style={styles.container}>
      <HeaderBar title="Confirmar" navigation={navigation} />
      <View style={styles.card}>
        <Text style={styles.recipient}>{recipient.name}</Text>
        <Text style={styles.bank}>{recipient.bank}</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Total</Text>
          <Text style={styles.amount}>
            $ {amount.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleTransfer}>
        <Text style={styles.buttonText}>Transferir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 24,
    backgroundColor: '#fff',
  },
  card: {
    padding: 24,
    alignItems: 'center',
  },
  recipient: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 4,
  },
  bank: {
    fontSize: 16,
    color: '#666',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 40,
  },
  label: {
    fontSize: 18,
  },
  amount: {
    fontSize: 18,
    fontWeight: '600',
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