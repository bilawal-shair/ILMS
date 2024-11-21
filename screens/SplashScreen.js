import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in the logo
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Navigate to the register screen after the delay
    const timer = setTimeout(() => {
      navigation.replace('login');
    }, 2000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation, logoOpacity]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/ilms.png')}
        style={[styles.logo, { opacity: logoOpacity }]}
      />
      {/* <Text style={styles.text}>ILMS</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 110, // Adjust the width as needed
    height: 110, // Adjust the height as needed marginBottom: 20, // Add some space between the logo and the text
    borderRadius:10
  },
  text: {
    fontSize: 35,
    fontWeight: '900',
    color: '#FFF',
     bottom:"4%"
  },
});

export default SplashScreen;
