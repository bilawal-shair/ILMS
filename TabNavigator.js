import { View, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome'



import ExploreScreen from './screens/ExploreScreen';
import CareerScreen from './screens/CareerScreen';
import LearnScreen from './screens/LearnScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="explore"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2E3198',
          tabBarLabelStyle: styles.tabBarLabel, // Apply styles here
          tabBarIconStyle: {marginTop:13 }, // Adjust as needed
          tabBarStyle: styles.tabBar, // Apply styles here
        }}
      >
        <Tab.Screen
          name="explore"
          component={ExploreScreen}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons  name="explore" color={color} size={21} />
            ),
          }}
        />
         <Tab.Screen
          name="search"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" color={color} size={21} />
            ),
          }}
        />
      
        <Tab.Screen
          name="learn"
          component={LearnScreen}
          options={{
            tabBarLabel: 'Learn',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="school-outline" color={color} size={24} />
            ),
          }}
        />
          <Tab.Screen
          name="career"
          component={CareerScreen}
          options={{
            tabBarLabel: 'Career',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="business-time" color={color} size={21} />
            ),
          }}
        />
       
         <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome6 name="user-large" color={color} size={21} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  tabBar: {
    position: 'absolute',
     height: 70,
    borderRadius:5,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  tabBarLabel: {
    fontWeight: 'bold',
    textAlign: 'center', // Center the text
    marginTop: 10, // Reset top margin if necessary
    marginBottom: 5, // Adjust bottom margin to better align with icon
    flex: 1, // Ensure it uses the available space
  },
});

export default TabNavigator;
