import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme';

export default function HomeScreen({ navigation, balance }) {
  const animatedBal = useRef(new Animated.Value(balance)).current;
  const [displayBal, setDisplayBal] = useState(balance);

  useEffect(() => {
    Animated.timing(animatedBal, {
      toValue: balance,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [balance]);

  animatedBal.addListener(({ value }) => {
    setDisplayBal(value);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dinero disponible</Text>
      <Text style={styles.balance}>
        $ {displayBal.toLocaleString('es-AR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Text>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('Deposit')}
      >
        <Ionicons name="add" size={20} color={COLORS.background} style={styles.actionIcon} />
        <Text style={styles.actionText}>Ingresar dinero</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => navigation.navigate('Recipients')}
      >
        <Ionicons name="swap-horizontal" size={20} color={COLORS.background} style={styles.actionIcon} />
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
    color: COLORS.muted,
    marginTop: 40,
  },
  balance: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 40,
    color: '#000',
  },
  actionButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  actionText: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: '600',
  },
  actionIcon: {
    marginRight: 8,
  },
  fab: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});