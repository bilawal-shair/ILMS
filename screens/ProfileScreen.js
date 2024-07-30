import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {


  const navigation = useNavigation();
  const handleLogout = () => {
    // Handle logout functionality here
    console.log('Logout pressed');
    navigation.navigate("login")
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.navigate("Setting")}>
          <Icon name="settings-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style = {{fontSize:25,fontWeight:"900",color:"black"}}>
        Profile
      </Text>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.1155509870.1697629433&semt=sph' }} // Replace with your profile image URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Bilawal Shair</Text>
        <Text style={styles.profileEmail}>bilwal@gmail.com</Text>
        <TouchableOpacity  style={styles.logoutButton} onPress={handleLogout}>
          <Icon name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    padding: 20,
    alignItems: 'flex-end',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E3198',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default ProfileScreen;
