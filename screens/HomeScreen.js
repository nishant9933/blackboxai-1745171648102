import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/mockData';

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <ServiceCard
      service={item}
      onPress={() => navigation.navigate('ServiceDetail', { serviceId: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  list: {
    paddingBottom: 16,
  },
});

export default HomeScreen;
