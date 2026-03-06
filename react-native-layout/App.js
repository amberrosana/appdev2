import { StyleSheet, View } from 'react-native';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Todo from './src/screens/Todo';
import { useState } from 'react';

export default function App() {
  const [screen, setScreen] = useState('login');

  const goToSignup = () => {
    setScreen('signup');
  };

  const goToLogin = () => {
    setScreen('login');
  };

  const goToTodo = () => {
    setScreen('todo');
  };

  return (
    <View style={styles.container}>
      {screen === 'login' && <Login goToSignup={goToSignup} goToTodo={goToTodo} />}
      {screen === 'signup' && <Signup goToLogin={goToLogin} goToTodo={goToTodo} />}
      {screen === 'todo' && <Todo goToLogin={goToLogin} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
