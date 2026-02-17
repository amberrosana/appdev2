import { TouchableOpacity, Text, StyleSheet } from "react-native"

export default function Button({ buttonText }) {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  buttonText: {
    color: 'white',
    fontWeight: 600
  },

  buttonContainer: {
    width: 200,
    height: 50,
    borderColor: '#2596BE',
    borderWidth: 1,
    backgroundColor: '#2596BE',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }

});