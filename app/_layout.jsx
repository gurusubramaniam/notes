import { Stack } from 'expo-router';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const HeaderLogout = () => {
  const { user, logout } = useAuth();
  return user ? (
    <TouchableOpacity style={styles.logout} onPress={logout}>
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  ) : null;
};
const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: 'orange',
            justifyContent: 'center',
            textAlign: 'center',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          headerRight: () => <HeaderLogout />,
          contentStyle: {
            paddingHorizontal: 10,
            paddingTop: 10,
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="notes" options={{ headerTitle: 'Notes' }} />
        <Stack.Screen name="auth" options={{ headerTitle: 'Login' }} />
      </Stack>
    </AuthProvider>
  );
};
const styles = StyleSheet.create({
  logout: {
    marginRight: 10,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
  },
});
export default RootLayout;
