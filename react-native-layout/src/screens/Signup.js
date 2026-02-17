import {StyleSheet, View, Text, Image} from 'react-native'
import Button from '../components/Button'
import InputContainer from '../components/InputContainer'

export default function Signup ({ goToLogin }) {
    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
              <Image style={styles.loginlogo} source={require('../../assets/login.png')} />
              <Text style={styles.title}>Sign Up</Text>
            </View>

            {/* Content Section */}
            <View style={styles.contentSection}>
                <InputContainer iconName="person-outline" iconSize={30} label="Name" placeholder="Enter your Name" />
                <InputContainer iconName="mail-outline" iconSize={30} label="Email" placeholder="Enter your email" />
                <InputContainer iconName="lock-closed-outline" iconSize={30} label="Password" placeholder="Enter your password" secureTextEntry={true} />
                <InputContainer iconName="lock-closed-outline" iconSize={30} label="Confirm Password" placeholder="Confirm your password" secureTextEntry={true} />
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Button buttonText="SIGN UP"></Button>
              <View style={styles.signup}>
                  <Text>Already have an account? </Text>
                  <Text style={styles.link} onPress={goToLogin}>Log in</Text>
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

  loginlogo: {
    width: 200,
    height: 200
  },
  
  title: {
    fontSize: 40,
    fontWeight: 900,
    color: '#333'
  },

})