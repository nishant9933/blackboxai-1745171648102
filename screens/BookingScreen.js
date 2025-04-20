import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TextInput, Button, Title, Paragraph } from 'react-native-paper';
import { services } from '../data/mockData';

const BookingScreen = ({ route, navigation }) => {
  const { serviceId } = route.params;
  const service = services.find((s) => s.id === serviceId);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');

  const handleBooking = () => {
    // For now, just mock booking success
    alert(`Booking confirmed for ${service.title}!\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\nDate: ${date}`);
    navigation.popToTop();
  };

  if (!service) {
    return (
      <View style={styles.center}>
        <Paragraph>Service not found.</Paragraph>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={100}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Title>Book {service.title}</Title>
        <TextInput
          label="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Phone Number"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          keyboardType="phone-pad"
          mode="outlined"
        />
        <TextInput
          label="Address"
          value={address}
          onChangeText={setAddress}
          style={styles.input}
          mode="outlined"
          multiline
        />
        <TextInput
          label="Preferred Date"
          value={date}
          onChangeText={setDate}
          style={styles.input}
          mode="outlined"
          placeholder="YYYY-MM-DD"
        />
        <Button mode="contained" onPress={handleBooking} style={styles.button}>
          Confirm Booking
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  input: {
    marginTop: 12,
  },
  button: {
    marginTop: 24,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookingScreen;
