import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const LearnScreen = () => {

  const navigation = useNavigation();
  
  return (
    <View style =  {{width:"100%",height:"100%",backgroundColor:"#fff"}}>

      <View style = {{width:"92%",height:"7%",alignSelf:"center",top:"4%",flexDirection:"row",justifyContent:"space-between"}}>
            <Text style = {{fontSize:14,fontWeight:"900",color:"#2E3198"}}>Switch Catelog</Text>
             <TouchableOpacity onPress={()=>navigation.navigate("Setting")}>
              <Icon name="settings-outline" size={25} color="#000" />
             </TouchableOpacity>
      </View>

      <Text style = {{fontSize:16,fontWeight:"600",color:"black",alignSelf:"center",top:"3%"}}>All Courses</Text>

      <View style = {{alignSelf:"center",top:"7%"}}>
        <Feather name="book-open" size={50} color="#000"/>
      </View>

      <View style = {{top:"10%"}}>
      <Text style = {{fontSize:16,fontWeight:"600",color:"black",alignSelf:"center",top:"3%"}}>Enroll in a course to view your</Text>
      <Text style = {{fontSize:16,fontWeight:"600",color:"black",alignSelf:"center",top:"3%"}}>Progress</Text>

      <Text style = {{fontSize:12,fontWeight:"600",color:"black",alignSelf:"center",top:"40%"}}>Start by enrolling in a course and learn something new</Text>

      </View>

      <TouchableOpacity onPress={()=>navigation.navigate("explore")} style = {{justifyContent:"center",alignItems:"center",width:"40%",height:"6%",backgroundColor:"#2E3198",alignSelf:"center",borderRadius:5,top:"20%"}}>
        <Text style = {{fontSize:12,fontWeight:"900",color:"#fff"}}>
          Explore Courses
        </Text>

      </TouchableOpacity>
      
     
     
    </View>
  )
}

export default LearnScreen