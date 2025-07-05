import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

export default function ReceiptScreen({ route }) {
  const { recipient, amount, opId } = route.params;
  const now = dayjs().format('dddd, DD [de] MMMM [de] YYYY a las HH:mm');

  const sender = {
    name: 'Hector Federico Acosta',
    cuit: '20-30436891-9',
    cvu: '0000003100054358184505',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comprobante de transferencia</Text>
      <Text style={styles.date}>{now}</Text>

      <Text style={styles.bigAmount}>
        $ {amount.toLocaleString('es-AR', { minimumFractionDigits: 0 })}
      </Text>
      <Text style={styles.motive}>Motivo: Varios</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>De</Text>
        <Text style={styles.sectionText}>{sender.name}</Text>
        <Text style={styles.sectionText}>CUIT/CUIL: {sender.cuit}</Text>
        <Text style={styles.sectionText}>Mercado Pago</Text>
        <Text style={styles.sectionText}>CVU: {sender.cvu}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Para</Text>
        <Text style={styles.sectionText}>{recipient.name}</Text>
        <Text style={styles.sectionText}>{recipient.bank}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>Número de operación</Text>
        <Text style={styles.sectionText}>{opId}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  bigAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  motive: {
    fontSize: 14,
    marginBottom: 24,
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  sectionText: {
    fontSize: 14,
  },
});