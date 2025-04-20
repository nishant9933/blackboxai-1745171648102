import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { workListings } from '../data/workData';

const DashboardScreen = () => {
  const [filteredWork, setFilteredWork] = useState(workListings);
  const [locationFilter, setLocationFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState('');
  const [workTypeFilter, setWorkTypeFilter] = useState('');

  useEffect(() => {
    filterWork();
  }, [locationFilter, serviceFilter, workTypeFilter]);

  const filterWork = () => {
    let filtered = workListings;

    if (locationFilter.trim() !== '') {
      filtered = filtered.filter((item) =>
        item.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }
    if (serviceFilter.trim() !== '') {
      filtered = filtered.filter((item) =>
        item.service.toLowerCase().includes(serviceFilter.toLowerCase())
      );
    }
    if (workTypeFilter.trim() !== '') {
      filtered = filtered.filter((item) =>
        item.workType.toLowerCase().includes(workTypeFilter.toLowerCase())
      );
    }

    setFilteredWork(filtered);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.meta}>Location: {item.location}</Text>
      <Text style={styles.meta}>Service: {item.service}</Text>
      <Text style={styles.meta}>Work Type: {item.workType}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Available Work</Text>

      <View style={styles.filters}>
        <TextInput
          style={styles.input}
          placeholder="Filter by Location"
          value={locationFilter}
          onChangeText={setLocationFilter}
        />
        <TextInput
          style={styles.input}
          placeholder="Filter by Service"
          value={serviceFilter}
          onChangeText={setServiceFilter}
        />
        <TextInput
          style={styles.input}
          placeholder="Filter by Work Type"
          value={workTypeFilter}
          onChangeText={setWorkTypeFilter}
        />
      </View>

      <FlatList
        data={filteredWork}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>No work found.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9fafb',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  filters: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    marginBottom: 6,
    color: '#4b5563',
  },
  meta: {
    fontSize: 12,
    color: '#6b7280',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#6b7280',
  },
});

export default DashboardScreen;
