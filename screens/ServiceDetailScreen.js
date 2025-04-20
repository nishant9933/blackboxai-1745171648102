import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Title, Paragraph, Button } from 'react-native-paper';
import { services } from '../data/mockData';

const ServiceDetailScreen = ({ route, navigation }) => {
  const { serviceId } = route.params;
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <View style={styles.center}>
        <Paragraph>Service not found.</Paragraph>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: service.image }} style={styles.image} />
      <Title style={styles.title}>{service.title}</Title>
      <Paragraph style={styles.description}>{service.description}</Paragraph>
      <Paragraph style={styles.price}>Price: ${service.price}</Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Booking', { serviceId: service.id })}
        style={styles.button}
      >
        Book Now
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    marginTop: 16,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 8,
  },
  price: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 24,
  },
});

export default ServiceDetailScreen;
