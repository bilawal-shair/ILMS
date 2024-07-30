import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchScreen = () => {
  const popularSearches = [
    "machine learning",
    "ai",
    "Mobile Development",
    "power bi",
    "API Integration",
    "cybersecurity",
    "ai for everyone",
    "google",
    "google ai essentials",
    "machine learning specialization",
    "deep learning specialization",
    "Expo",
    "TypeScript",
    "Expo",
    "Finance",
    "React Native",
    "TypeScript",
    "Ux Desine",
  ];

  return (
    <View style={styles.container}>

     
      <ScrollView contentContainerStyle={styles.scrollView}>

      <Text style = {{fontSize:14,fontWeight:"900",color:"#2E3198"}}>Switch Catelog</Text>

        <Text style = {{fontSize:20,fontWeight:"900",color:"black",top:"1%"}}>
         Search
        </Text>

      <View style={styles.searchBoxContainer}>
        <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBox}
          placeholder="What do you want to Learn?"
          placeholderTextColor={'gray'}
        />
      </View>

        <Text style={styles.heading}>Popular Searches</Text>
        {popularSearches.map((item, index) => (
          <View key={index} style={styles.searchItem}>
            <Text style={styles.searchText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#fff'
  },
  searchBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 30,
    paddingHorizontal: 5,
    top:"7%"
   
  },
  searchIcon: {
    marginRight: 10
  },
  searchBox: {
    flex: 1,
    height: 50,
    paddingHorizontal: 4,
    color:"black"
  },
  scrollView: {
    flexGrow: 1,
    top: "2%",
    paddingBottom: 110
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "black",
    top: "1%"
  },
  searchItem: {
    padding: 13,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    
  },
  searchText: {
    fontSize: 16,
  }
});

export default SearchScreen;
