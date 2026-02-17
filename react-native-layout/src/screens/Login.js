import {StyleSheet, View, Text } from 'react-native'
import Button from '../components/Button'

export default function Login ({ goToSignup }) {
    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>

            </View>

            {/* Content Section */}
            <View style={styles.contentSection}>

            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Button buttonText="LOG IN"></Button>
                <View style={styles.signup}>
                    <Text>Don't have an account? </Text>
                    <Text style={styles.link} onPress={goToSignup}>Sign up</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3'
  },

  header: {
    flex: 1,
    backgroundColor: 'red'
  },

  contentSection: {
    flex: 1,
    backgroundColor: 'blue'
  },

  footer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F3F3F3'
  },

  signup: {
    flexDirection: 'row',
    marginTop: 10
  },
  
  link: {
    color: "#1a88b0",
    fontWeight: 600
  },

})