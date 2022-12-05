import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function User() {
  const user = useSelector((state) => state.currentUser);
  const {
    image,
    firstName,
    lastName,
    age,
    company: {
      address: { address, postalCode, state },
    },
  } = user;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.text}>First Name: {firstName}</Text>
      <Text style={styles.text}>Last Name: {lastName}</Text>
      <Text style={styles.text}>Age: {age}</Text>
      <Text style={styles.text}>Company Address: {address}</Text>
      <Text style={styles.text}>Company Postal Code: {postalCode}</Text>
      <Text style={styles.text}>Company State: {state}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 15,
    marginVertical: 7,
  },
});
