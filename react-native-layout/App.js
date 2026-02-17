import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import InputContainer  from './src/components/InputContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <InputContainer iconName="mail-outline" iconSize={32} placeholder="Email" />
      <InputContainer placeholder="No icon input field sample" />
      <InputContainer iconName="lock-closed-outline" secureTextEntry iconSize={32} placeholder="Password" />
      <Button buttonText="ANY TEXT HERE" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
