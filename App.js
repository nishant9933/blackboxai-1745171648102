import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ServiceDetailScreen from './screens/ServiceDetailScreen';
import BookingScreen from './screens/BookingScreen';
import LoginScreen from './screens/LoginScreen';
import RoleSelectionScreen from './screens/RoleSelectionScreen';
import WorkerRegistrationScreen from './screens/WorkerRegistrationScreen';
import DashboardScreen from './screens/DashboardScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'worker' or 'workSeeker'

  // Simulate login state change
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
  };

  const handleRoleSelect = (role) => {
    setUserRole(role);
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {!isLoggedIn ? (
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
              initialParams={{ onLogin: handleLogin }}
            />
          ) : !userRole ? (
            <Stack.Screen
              name="RoleSelection"
              component={RoleSelectionScreen}
              options={{ headerShown: false }}
              initialParams={{ onRoleSelect: handleRoleSelect }}
            />
          ) : userRole === 'worker' ? (
            <Stack.Screen
              name="WorkerRegistration"
              component={WorkerRegistrationScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
              <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Services' }} />
              <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} options={{ title: 'Service Detail' }} />
              <Stack.Screen name="Booking" component={BookingScreen} options={{ title: 'Book Service' }} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
