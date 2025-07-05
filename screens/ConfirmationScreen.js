import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import PrimaryButton from '../components/PrimaryButton';
import { LoadingContext } from '../App';

export default function ConfirmationScreen({ route, navigation, balance, setBalance }) {
  const { recipient, amount } = route.params;
  const { setLoading } = React.useContext(LoadingContext);

  const handleTransfer = () => {
    if (balance < amount) {
      alert('Saldo insuficiente');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setBalance(prev => prev - amount);
      setLoading(false);
      navigation.navigate('Receipt', {
        recipient,
        amount,
        opId: Date.now().toString(36),
      });
    }, 1000);
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

      <PrimaryButton title="Transferir" onPress={handleTransfer} />
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
});