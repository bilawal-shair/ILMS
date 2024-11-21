import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [fullNameFocused, setFullNameFocused] = useState(true);
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [contactNumberFocused, setContactNumberFocused] = useState(false);

  const handleRegister = () => {
    // Handle registration logic here
    // console.log('Full Name:', fullName);
    // console.log('Username:', username);
    // console.log('Password:', password);
    // console.log('Contact Number:', contactNumber);
    navigation.navigate("login");
  };

  return (
    <View style={styles.container}>

      <Image source={require('../assets/ilms.png')} style={styles.logo} />

      <Text style={styles.title}>Register</Text>

      <View style={[styles.inputContainer, fullNameFocused && styles.inputContainerFocused]}>
        <Icon name="user" size={20} color={fullNameFocused ? "#4B0082" : "#ddd"} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor={'gray'}
          value={fullName}
          onChangeText={setFullName}
          onFocus={() => setFullNameFocused(true)}
          onBlur={() => setFullNameFocused(false)}
        />
      </View>

      <View style={[styles.inputContainer, usernameFocused && styles.inputContainerFocused]}>
        <Icon name="user" size={20} color={usernameFocused ? "#4B0082" : "#ddd"} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          placeholderTextColor={'gray'}
          onChangeText={setUsername}
          onFocus={() => setUsernameFocused(true)}
          onBlur={() => setUsernameFocused(false)}
        />
      </View>

      <View style={[styles.inputContainer, passwordFocused && styles.inputContainerFocused]}>
        <Icon name="lock" size={20} color={passwordFocused ? "#4B0082" : "#ddd"} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={'gray'}
          secureTextEntry
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
        />
      </View>

      <View style={[styles.inputContainer, contactNumberFocused && styles.inputContainerFocused]}>
        <Icon name="phone" size={20} color={contactNumberFocused ? "#4B0082" : "#ddd"} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          value={contactNumber}
          onChangeText={setContactNumber}
          placeholderTextColor={'gray'}
          keyboardType="phone-pad"
          onFocus={() => setContactNumberFocused(true)}
          onBlur={() => setContactNumberFocused(false)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: "900",
    color: "black"
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  inputContainerFocused: {
    borderColor: '#4B0082',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color:"#4B0082"
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4B0082',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: "25%",
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "900"
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 80,
    alignSelf: "center",
    borderRadius:10,
    
  },
});

export default RegisterScreen;
