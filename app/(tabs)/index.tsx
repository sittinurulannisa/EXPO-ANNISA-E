import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Persegi Panjang dengan Nama */}
      <View style={styles.rectangle}>
        <Text style={styles.text}>SITTI NURUL ANNISA</Text>
      </View>

      {/* Segitiga */}
      <View style={styles.triangle} />

      {/* Bentuk Pil (Capsule) */}
      <View style={styles.pill}>
        <Text style={styles.pillText}>105841115522</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  rectangle: {
    width: 250,
    height: 80,
    backgroundColor: '#d2b48c', // coklat muda
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 100,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ff6347', // oranye merah
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: '#32cd32', // hijau cerah
    borderRadius: 50,
  },
  pillText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
