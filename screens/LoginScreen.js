import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameFocused, setUsernameFocused] = useState(true);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    // console.log('Username:', username);
    // console.log('Password:', password);
    navigation.navigate("tab");
  };

  const navigateToRegister = () => {
    navigation.navigate("register");
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/ilms.png')} style={styles.logo} />

      <Text style={styles.loginText}>Login</Text>

      <View style={[styles.inputContainer, usernameFocused && styles.inputContainerFocused]}>
        <Icon
          name="user"
          size={20}
          color={usernameFocused ? "#4B0082" : "#ddd"} // Change icon color based on focus state
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={'gray'}
          value={username}
          onChangeText={setUsername}
          onFocus={() => setUsernameFocused(true)}
          onBlur={() => setUsernameFocused(false)}
        />
      </View>

      <View style={[styles.inputContainer, passwordFocused && styles.inputContainerFocused]}>
        <Icon
          name="lock"
          size={20}
          color={passwordFocused ? "#4B0082" : "#ddd"} // Change icon color based on focus state
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'gray'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToRegister}>
        <Text style={styles.registerText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: "10%",
    borderRadius:10
  },
  loginText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: "20%",
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
    color:"#2E3198"
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4B0082',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: "40%",
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "900",
  },
  registerText: {
    color: '#4B0082',
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default LoginScreen;
