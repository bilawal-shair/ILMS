import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <TouchableOpacity style={styles.option}>
        <Icon name="brightness-6" size={24} color="#2E3198" />
        <Text style={styles.optionText}>Dark Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Icon name="brightness-7" size={24} color="#2E3198" />
        <Text style={styles.optionText}>Light Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Icon name="language" size={24} color="#2E3198" />
        <Text style={styles.optionText}>Change Preferred Language</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Icon name="file-download" size={24} color="#2E3198" />
        <Text style={styles.optionText}>Download Options</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Icon name="logout" size={24} color="#2E3198" />
        <Text style={styles.optionText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#2E3198',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  optionText: {
    fontSize: 18,
    color: '#333333',
    marginLeft: 10,
  },
});

export default SettingScreen;
