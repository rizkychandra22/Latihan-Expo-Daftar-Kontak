import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ContactDetail({ route }) {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Image source={contact.gambar} style={styles.img} />
      <Text style={styles.title}>{contact.judul}</Text>
      <Text style={styles.telp}>{contact.telpon}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  telp: {
    fontSize: 20,
    color: '#3498db',
  },
});
