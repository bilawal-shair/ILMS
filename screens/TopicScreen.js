import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const TopicScreen = () => {
  return (
    <View style = {{width:"100%",height:"100%",backgroundColo:"#fff"}}>
        <ScrollView contentContainerStyle= {{marginBottom:"10%"}}>

            <View style = {{top:"10%",left:"10%",marginBottom:"5%"}}>
            <Text style = {{fontSize:16,fontWeight:"600",color:"black"}}>Art And Humanities</Text>
            </View>
            <View style = {{top:"10%",left:"10%",marginBottom:"5%"}}>
            <Text style = {{fontSize:16,fontWeight:"600",color:"black"}}>Bussiness</Text>
            </View>
            <View style = {{top:"10%",left:"10%",marginBottom:"5%"}}>
            <Text style = {{fontSize:16,fontWeight:"600",color:"black"}}>Computer Science</Text>
            </View>
            <View style = {{top:"10%",left:"10%",marginBottom:"5%"}}>
            <Text style = {{fontSize:16,fontWeight:"600",color:"black"}}>Data Science</Text>
            </View>
            <View style = {{top:"10%",left:"10%",marginBottom:"5%"}}>
            <Text style = {{fontSize:16,fontWeight:"600",color:"black"}}>Information Technology</Text>
            </View>
            <View style = {{top:"10%",left:"10%",marginBottom:"5%"}}>
            <Text style = {{fontSize:16,fontWeight:"600",color:"black"}}>Health</Text>
            </View>
            <View style = {{top:"10%",left:"10%",marginBottom:"5%"}}>
            <Text style = {{fontSize:16,fontWeight:"600",color:"black"}}>Math and Logic</Text>
            </View>
            <View style = {{top:"10%",left:"10%",marginBottom:"5%"}}>
            <Text style = {{fontSize:16,fontWeight:"600",color:"black"}}>Personal Development</Text>
            </View>
            <View style = {{top:"10%",left:"10%",marginBottom:"5%"}}>
            <Text style = {{fontSize:16,fontWeight:"600",color:"black"}}>Physical Science and Engineering</Text>
            </View>
            <View style = {{top:"10%",left:"10%",marginBottom:"5%"}}>
            <Text style = {{fontSize:16,fontWeight:"600",color:"black"}}>Social Science</Text>
            </View>
       
        </ScrollView>


      
    </View>
  )
}

export default TopicScreen