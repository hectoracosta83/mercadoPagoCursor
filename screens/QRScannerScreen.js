import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import HeaderBar from '../components/HeaderBar';
import PrimaryButton from '../components/PrimaryButton';

export default function QRScannerScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const parseQR = data => {
    // very simple: if data matches a name id e.g. '1'
    const found = [{ id: '1', name: 'Acosta Hector Federico', bank: 'Banco Santander Rio' }].find(r => r.id === data);
    return found;
  };

  const handleScan = ({ data }) => {
    if (scanned) return;
    setScanned(true);
    const recipient = parseQR(data);
    if (recipient) {
      navigation.replace('AmountEntry', { recipient });
    } else {
      alert('QR no válido');
      setTimeout(() => setScanned(false), 1000);
    }
  };

  if (hasPermission === null) {
    return (
      <View style={styles.center}>
        <HeaderBar title="Escanear QR" navigation={navigation} />
        <Text>Solicitando permiso...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.center}>
        <HeaderBar title="Escanear QR" navigation={navigation} />
        <Text>Sin acceso a la cámara</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderBar title="Escanear QR" navigation={navigation} />
      <BarCodeScanner
        style={{ flex: 1 }}
        onBarCodeScanned={handleScan}
      />
      {scanned && (
        <View style={styles.rescanWrapper}>
          <PrimaryButton title="Reescanear" onPress={() => setScanned(false)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rescanWrapper: {
    position: 'absolute',
    bottom: 32,
    left: 24,
    right: 24,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});