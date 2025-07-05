import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation, balance }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dinero disponible</Text>
      <Text style={styles.balance}>
        $ {balance.toLocaleString('es-AR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Text>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('Deposit')}
      >
        <Text style={styles.actionText}>Ingresar dinero</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('Recipients')}
      >
        <Text style={styles.actionText}>Transferir</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('QRScanner')}
      >
        <Ionicons name="qr-code" size={30} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    color: '#999',
  },
  balance: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 40,
    color: '#000',
  },
  actionButton: {
    backgroundColor: '#009ee3',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    backgroundColor: '#009ee3',
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});