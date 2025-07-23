import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

export default function IconScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>10 Ikon Keren</Text>
      <View style={styles.iconGrid}>
        <Ionicons name="airplane" size={40} color="#ffffff" />
        <FontAwesome name="leaf" size={40} color="#ffffff" />
        <MaterialIcons name="pets" size={40} color="#ffffff" />
        <Feather name="moon" size={40} color="#ffffff" />
        <Entypo name="game-controller" size={40} color="#ffffff" />
        <AntDesign name="Safety" size={40} color="#ffffff" />
        <MaterialCommunityIcons name="robot" size={40} color="#ffffff" />
        <Octicons name="zap" size={40} color="#ffffff" />
        <EvilIcons name="calendar" size={50} color="#ffffff" />
        <Foundation name="burst-new" size={40} color="#ffffff" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#2980b9', // biru
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    rowGap: 30,
  },
});
