import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import HeaderBar from '../components/HeaderBar';
import PrimaryButton from '../components/PrimaryButton';
import * as Linking from 'expo-linking';

export default function QRScannerScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const recipients = {
    'ACOSTA.HF': { id: '1', alias: 'ACOSTA.HF', name: 'Acosta Hector Federico', bank: 'Banco Santander Rio' },
    'DINIGER.W': { id: '2', alias: 'DINIGER.W', name: 'Diniger Walter', bank: 'BBVA' },
    'KIARA.ACOSTA': { id: '3', alias: 'KIARA.ACOSTA', name: 'Kiara Natalia Acosta Giraudo', bank: 'Brubank' },
    'SALDIVIA.M': { id: '4', alias: 'SALDIVIA.M', name: 'Saldivia Matias', bank: 'Banco Galicia' },
    'ROCIO.S': { id: '5', alias: 'ROCIO.S', name: 'Rocio Salomon', bank: 'Mercado Pago' },
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const parseQR = rawData => {
    // Mercado Pago QR ejemplo: "mp://transfer?alias=ACOSTA.HF"
    const { queryParams } = Linking.parse(rawData);
    if (queryParams && queryParams.alias && recipients[queryParams.alias]) {
      return recipients[queryParams.alias];
    }
    // fallback: si QR es el alias directo
    if (recipients[rawData]) return recipients[rawData];
    return null;
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