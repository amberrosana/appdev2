import { StyleSheet, View } from 'react-native';
import Login from './src/screens/Login'
import Signup from './src/screens/Signup';
import { useState } from 'react';

export default function App() {
  const [screen, setScreen] = useState('login');

  const goToSignup = () => {
    setScreen('signup');
  };  

  const goToLogin = () => {
    setScreen('login');
  };

  return (
    <View style={styles.container}>
      {screen === 'login' && <Login goToSignup={goToSignup} />}
      {screen === 'signup' && <Signup goToLogin={goToLogin} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
