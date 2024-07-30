import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import TabNavigator from './TabNavigator';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import TopicScreen from './screens/TopicScreen';
import PopularCertificate from './screens/PopularCertificate';
import EarnDegrees from './screens/EarnDegrees';
import CoursesScreen from './screens/CoursesScreen';
import ComputerScreen from './screens/ComputerScreen';
import CryptographyScreen from './screens/CryptographyScreen';
import AlgorithmScreen from './screens/AlgorithmScreen';
import CyberSecurityScreen from './screens/CyberSecurityScreen';
import SettingScreen from './screens/SettingScreen';
import ArtHumanitiesScreen from './screens/ArtHumanitiesScreen';
import BussinessScreen from './screens/BussinessScreen';
import ComputerScreen2 from './screens/ComputerScreen2';
import DataScienceScreen from './screens/DataScienceScreen';
import HealthScreen from './screens/HealthScreen';
import InformationTechnologyScreen from './screens/InformationTechnologyScreen';



const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='splashScreen'> 
         <Stack.Screen name="splashScreen"  component={SplashScreen}  options={{ headerShown: false }}/>
         <Stack.Screen name="tab"  component={TabNavigator}  options={{ headerShown: false }}/>
         <Stack.Screen name="login"  component={LoginScreen}  options={{ headerShown: false }}/>
         <Stack.Screen name="register"  component={RegisterScreen}  options={{ headerShown: false }}/>
         <Stack.Screen name="Explore by Topic"  component={TopicScreen}  options={{ headerShown: true }}/>
         <Stack.Screen name="Most Popular Certificates"  component={PopularCertificate}  options={{ headerShown: true }}/>
         <Stack.Screen name="Earn Your Degrees"  component={EarnDegrees}  options={{ headerShown: true }}/>
         <Stack.Screen name="Get Started With this Free Courses"  component={CoursesScreen}  options={{ headerShown: true }}/>
         <Stack.Screen name="Computer Science Programming wit Pur.."  component={ComputerScreen}  options={{ headerShown: true }}/>
         <Stack.Screen name="Cryptography"  component={CryptographyScreen}  options={{ headerShown: true }}/>
         <Stack.Screen name="Algorithm"  component={AlgorithmScreen}  options={{ headerShown: true }}/>
         <Stack.Screen name="CyberSecurity"  component={CyberSecurityScreen}  options={{ headerShown: true }}/>
         <Stack.Screen name="Setting"  component={SettingScreen}  options={{ headerShown: true }}/>
         <Stack.Screen name="Art and Humanities"  component={ArtHumanitiesScreen}  options={{ headerShown: true }}/>
         <Stack.Screen name="Bussiness"  component={BussinessScreen}  options={{ headerShown: true }}/>
         <Stack.Screen name="Computer Screen"  component={ComputerScreen2}  options={{ headerShown: true }}/>
         <Stack.Screen name="Data Science"  component={DataScienceScreen}  options={{ headerShown: true }}/>
         <Stack.Screen name="Health"  component={HealthScreen}  options={{ headerShown: true }}/>
         <Stack.Screen name="Information Technology"  component={InformationTechnologyScreen}  options={{ headerShown: true }}/>
        
       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator