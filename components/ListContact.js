import React from 'react';
import { View, StyleSheet } from 'react-native';
import Contact from './Contact';

export default function ListContact({ navigation }) {
  const contacts = [
    {
      gambar: require('../assets/test1.jpg'),
      judul: 'Kontak saya',
      telpon: '0895605050961',
    },
    {
      gambar: require('../assets/test2.jpg'),
      judul: 'Kontak saya juga',
      telpon: '085860517808',
    },
  ];

  return (
    <View style={styles.container}>
      {contacts.map((contact, index) => (
        <Contact
          key={index}
          contact={contact}
          navigation={navigation}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
