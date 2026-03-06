import {StyleSheet, View, Text, Image } from 'react-native'
import Button from '../components/Button'
import InputContainer from '../components/InputContainer'

export default function Login ({ goToSignup, goToTodo }) {
    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
              <Image style={styles.loginlogo} source={require('../../assets/login.png')} />
              <Text style={styles.title}>Log In</Text>
            </View>

            {/* Content Section */}
            <View style={styles.contentSection}>
                <InputContainer iconName="mail-outline" iconSize={30} label="Email" placeholder="Enter your email" />
                <InputContainer iconName="lock-closed-outline" iconSize={30} label="Password" placeholder="Enter your password" secureTextEntry={true} />
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Button buttonText="LOG IN" onPress={goToTodo}></Button>
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
    backgroundColor: '#cbf1ff'
  },

  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  contentSection: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  footer: {
    flex: 1,
    alignItems: 'center',
  },

  signup: {
    flexDirection: 'row',
    marginTop: 10
  },
  
  link: {
    color: "#1a88b0",
    fontWeight: 600
  },

  loginlogo: {
    width: 100,
    height: 100
  },
  
  title: {
    fontSize: 40,
    fontWeight: 900,
    color: '#333'
  },

})