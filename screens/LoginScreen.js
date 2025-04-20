import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation, route }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  // Simulate sending OTP
  const sendOtp = () => {
    if (mobileNumber.length < 10) {
      Alert.alert('Error', 'Please enter a valid mobile number');
      return;
    }
    setOtpSent(true);
    Alert.alert('OTP Sent', 'A simulated OTP has been sent to your mobile number');
  };

  // Simulate verifying OTP and login
  const verifyOtp = () => {
    if (otp === '1234') {
      // Simulate successful login
      navigation.replace('RoleSelection', { loginMethod: 'mobile' });
    } else {
      Alert.alert('Error', 'Invalid OTP. Please enter 1234 as OTP for simulation.');
    }
  };

  // Simulate Gmail login
  const gmailLogin = () => {
    // Simulate backend role assignment and first time login check
    navigation.replace('RoleSelection', { loginMethod: 'gmail', firstTime: true });
  };

  // Simulate Facebook login
  const facebookLogin = () => {
    // Simulate backend role assignment and first time login check
    navigation.replace('RoleSelection', { loginMethod: 'facebook', firstTime: true });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {!otpSent ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile Number"
            keyboardType="phone-pad"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />
          <TouchableOpacity style={styles.button} onPress={sendOtp}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP (1234)"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
          />
          <TouchableOpacity style={styles.button} onPress={verifyOtp}>
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        </>
      )}

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity style={styles.socialButton} onPress={gmailLogin}>
        <Text style={styles.socialButtonText}>Login with Gmail</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton} onPress={facebookLogin}>
        <Text style={styles.socialButtonText}>Login with Facebook</Text>
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
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 12,
    fontSize: 16,
    color: '#6b7280',
  },
  socialButton: {
    backgroundColor: '#e5e7eb',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#111827',
  },
});

export default LoginScreen;
