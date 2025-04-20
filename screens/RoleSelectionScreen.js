import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RoleSelectionScreen = ({ navigation, route }) => {
  const { loginMethod, firstTime } = route.params || {};

  const handleSelection = (role) => {
    if (role === 'worker') {
      // Navigate to Worker Registration if user is looking for work
      navigation.replace('WorkerRegistration');
    } else if (role === 'workSeeker') {
      // Navigate to Dashboard if user is looking for worker
      navigation.replace('Dashboard');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Are you looking for work or a worker?</Text>

      <TouchableOpacity style={styles.button} onPress={() => handleSelection('worker')}>
        <Text style={styles.buttonText}>Looking for Work</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleSelection('workSeeker')}>
        <Text style={styles.buttonText}>Looking for Worker</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f9fafb',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
    color: '#4b5563',
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default RoleSelectionScreen;
