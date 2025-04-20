import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Image } from 'react-native';

const ServiceCard = ({ service, onPress }) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Cover source={{ uri: service.image }} />
      <Card.Content>
        <Title>{service.title}</Title>
        <Paragraph>{service.description}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
  },
});

export default ServiceCard;
