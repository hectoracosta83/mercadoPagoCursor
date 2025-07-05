import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme';

export default function HomeScreen({ navigation, balance }) {
  const animatedBal = useRef(new Animated.Value(balance)).current;

  useEffect(() => {
    Animated.timing(animatedBal, {
      toValue: balance,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [balance]);

  const formatted = animatedBal.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dinero disponible</Text>
      <Animated.Text
        style={styles.balance}
        // eslint-disable-next-line react/no-unstable-nested-components
      >
        $ {animatedBal.__getValue().toLocaleString('es-AR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Animated.Text>

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