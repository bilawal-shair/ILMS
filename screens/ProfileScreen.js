import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Handle logout functionality here
    console.log('Logout pressed');
    navigation.navigate("login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
          <Icon name="settings-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://img.freepik.com/free-photo/handsome-blond-young-man-wearing-casual-plaid-shirt-looking-away-grey-wall_176420-598.jpg?ga=GA1.1.1155509870.1697629433&semt=ais_hybrid' }}
          style={styles.profileImage}
        />

        <View style = {{ borderRadius:10, justifyContent:"center",alignItems:"center",width:"80%",height:"8%",backgroundColor:"#E0E0E0"}}>
       
        <Text style={styles.profileName}>Bilawal Shair</Text>

        </View>
        <View style = {{ borderRadius:10, top:"1%",justifyContent:"center",alignItems:"center",width:"80%",height:"8%",backgroundColor:"#E0E0E0"}}>
       
        <Text style={[styles.profileEmail,{marginTop:10}]}>bilwal@gmail.com</Text>

        </View>
        
       
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Icon name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: '900',
    color: 'black',
    alignSelf: 'center',
    marginVertical: 20,
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.4) / 2,
    marginBottom: 40,
    borderWidth: 2,
    borderColor: '#4B0082',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 18,
    color: '#777',
    marginBottom: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4B0082',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop:"8%"
  },
  logoutButtonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 18,
  },
});

export default ProfileScreen;
