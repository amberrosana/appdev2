import { StyleSheet, View, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function InputContainer({iconName, iconSize, placeholder, secureTextEntry = false}) {
    return (
        <View style={styles.inputContainer}>
          <Ionicons style={styles.icon} name={iconName} size={iconSize} />
          <TextInput placeholder={placeholder} secureTextEntry={secureTextEntry} style={styles.input}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 50,
        marginBottom: 15,
        width: '85%',
        paddingHorizontal: 15,
        backgroundColor: 'white',
        alignItems: 'center'
    },

    input:{
        height: 50,
        flex: 1
    },

    icon: {
        color: "black",
        marginRight: 10
    },
});