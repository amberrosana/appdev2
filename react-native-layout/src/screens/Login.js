import {StyleSheet, View } from 'react-native'

export default function Login () {
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
    backgroundColor: 'green'
  },

})