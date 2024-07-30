import { View, Text, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native'

const BussinessScreen = () => {

  const navigation = useNavigation();
  return (
    <View style={{ width: "100%", height: "100%", }}>


     
      <ScrollView style={{ marginBottom: "30%", top: "5%" }}>

        <View style={{ flexDirection: "row", width: "95%", padding: 16, alignSelf: "center", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: "900", color: "black" }} >Bussiness</Text>

          {/* <TouchableOpacity onPress={()=>navigation.navigate("Explore by Topic")}>
             <Text style={{ fontSize: 13, fontWeight: "900", color: "gray" }}>See All</Text>
          </TouchableOpacity> */}
         
        </View>


        <View style={{ top: "1%", width: "100%", height: "7%", alignSelf: "center" }}>
          <ScrollView
            horizontal
            contentContainerStyle={{ flexDirection: "row", alignItems: "center" }}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity  style={{ borderRadius: 10, width: 170, height: 60, backgroundColor: "#000080", marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: "900", color: "#fff" }}>
                Leadership and management
              </Text>
            </TouchableOpacity>
            <TouchableOpacity   style={{ borderRadius: 10, width: 120, height: 60, backgroundColor: "#800000", marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: "900", color: "#fff" }}>
                Finance
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderRadius: 10, width: 170, height: 60, backgroundColor: "#006400", marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: "900", color: "#fff" }}>
               Marketing
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderRadius: 10, justifyContent: "center", alignItems: "center", width: 170, height: 60, backgroundColor: "#0000CD", marginHorizontal: 5 }}>
              <Text style={{ fontSize: 14, fontWeight: "900", color: "#fff" }}>
                Bussiness Strategy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderRadius: 10, width: 180, height: 60, backgroundColor: "#008B8B", marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: "900", color: "#fff" }}>
               Enterpreneurship
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ right:5,borderRadius: 10, justifyContent: "center", alignItems: "center", width: 90, height: 60, backgroundColor: "#8B4513", marginHorizontal: 5 }}>
              <Text style={{ fontSize: 14, fontWeight: "900", color: "#fff" }}>
               Bussiness Essentials
              </Text>
            </TouchableOpacity>
          
           
          </ScrollView>
        </View>
        <View style={{ marginBottom: "2%", top: "5%", flexDirection: "row", width: "95%", padding: 16, alignSelf: "center", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: "900", color: "black" }} >Storytelling With Data Using Excel</Text>

          {/* <TouchableOpacity onPress={()=>navigation.navigate("Most Popular Certificates")}>
            <Text style={{ fontSize: 13, fontWeight: "900", color: "gray" }}>See All</Text>
           </TouchableOpacity> */}
         
        </View>

        <View style={{ marginBottom: "10%", top: "5%", flexDirection: "row", width: "100%", padding: 9, alignSelf: "center", alignItems: "center" }}>
          <ScrollView
            horizontal
            contentContainerStyle={{ flexDirection: "row", alignItems: "center" }}
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ borderRadius: 10, width: 150, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>

              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/office-worker-looks-greenscreen_482257-76595.jpg?ga=GA1.1.1155509870.1697629433&semt=ais_user" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                  Share Data Vistualization 
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                  Google
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
               Course
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Entypo name={'star'} size={10} color={'black'} />
                  <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                    4.8(13.8k)
                  </Text>
                </View>

              </View>



            </View>
            <View style={{ borderRadius: 10, width: 150, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/premium-photo/project-planning-software-modish-business-project-management_31965-45049.jpg?ga=GA1.1.1155509870.1697629433&semt=ais_user" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                 Excell Skills for Bussiness
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                  Google
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                  Project Certificate
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Entypo name={'star'} size={10} color={'black'} />
                  <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                    4.8(13.8k)
                  </Text>
                </View>

              </View>
            </View>
            <View style={{ borderRadius: 10, width: 150, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/stock-exchange-trading-forex-finance-graphic-concept_53876-147935.jpg?ga=GA1.1.1155509870.1697629433&semt=ais_user" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                 Excel Basic for Data 
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                  Google
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                  Project Certificate
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Entypo name={'star'} size={10} color={'black'} />
                  <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                    4.8(13.8k)
                  </Text>
                </View>

              </View>
            </View>
            <View style={{ borderRadius: 10, width: 150, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/manager-watches-tablet-with-greenscreen_482257-76577.jpg?ga=GA1.1.1155509870.1697629433&semt=ais_user" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                 Work Smarter With Excel   
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                   Data Analysis
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                 Course 
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Entypo name={'star'} size={10} color={'black'} />
                  <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                    4.8(13.8k)
                  </Text>
                </View>

              </View>
            </View>
            <View style={{ borderRadius: 10, width: 150, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/man-working-with-infographics-indoors_23-2148816826.jpg?ga=GA1.1.1155509870.1697629433&semt=ais_user" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
               Problem Solving With 
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                 Pwc
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                Course
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Entypo name={'star'} size={10} color={'black'} />
                  <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                    4.8(13.8k)
                  </Text>
                </View>

              </View>
            </View>
            <View style={{ borderRadius: 10, width: 150, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/premium-photo/laptop-green-background-with-various-business-charts-analytics-trend-concept-3d-rendering_670147-29478.jpg?ga=GA1.1.1155509870.1697629433&semt=ais_user" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
               Excel Time Series
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                Macquarie University 
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                  Course
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Entypo name={'star'} size={10} color={'black'} />
                  <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                    4.8(13.8k)
                  </Text>
                </View>

              </View>
            </View>

          </ScrollView>
        </View>

        <View style={{ marginBottom: "1%", bottom: "3%", flexDirection: "row", width: "90%", padding: 16, alignSelf: "center", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: "900", color: "black" }} >Earn your Degrees</Text>


          {/* <TouchableOpacity onPress={()=>navigation.navigate("Earn Your Degrees")}>
            <Text style={{ fontSize: 13, fontWeight: "900", color: "gray" }}>See All</Text>
          </TouchableOpacity> */}
         
        </View>
        <View style={{ marginBottom: "2%", bottom: "2%", flexDirection: "row", width: "100%", padding: 9, alignSelf: "center", alignItems: "center" }}>
          <ScrollView
            horizontal
            contentContainerStyle={{ flexDirection: "row", alignItems: "center" }}
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ borderRadius: 10, width: 150, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>

              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                  Maestria en Gerencia de la lngenieria
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                Universidad de los Andes
                </Text>
               </View>

            </View>
            <View style={{ borderRadius: 10, width: 160, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 140, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany_181624-17876.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                Bechlor  Science in CyberSecurity
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                University of Maryland Global Campus
                </Text>
                

              </View>
            </View>
            <View style={{ borderRadius: 10, width: 170, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 140, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/premium-photo/brick-building-with-sign-reading-college-business-front_839169-3907.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                  Bechlor of science  cybersecurity
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                  Google
                </Text>
               </View>
            </View>
            <View style={{ borderRadius: 10, width: 170, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 160, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/royal-palace-madrid-spain_1398-4247.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                   Master Bussiness Administration 
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                University Maryland Global Campus
                </Text>
                

              </View>
            </View>
            <View style={{ borderRadius: 10, width: 170, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking_8353-6408.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                Msc Management
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                University of Huddersfield
                </Text>
                

              </View>
            </View>
            <View style={{ borderRadius: 10, width: 170, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/friends-celebrating-graduation_23-2148522243.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                MBA in Bussiness Analytics
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                O.P Jindal Global University
                </Text>
              

              </View>
            </View>

          </ScrollView>
        </View>
        <View style={{ marginBottom: 10, width: "90%", padding: 10, alignSelf: "center" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
            <Text style={{ fontSize: 15, fontWeight: "900", color: "black" }}>
              Digital Transformation and Innovation 
            </Text>
            {/* <TouchableOpacity onPress={()=>navigation.navigate("Get Started With this Free Courses")}>
               <Text style={{ fontSize: 13, fontWeight: "900", color: "gray" }}>
                 See All
               </Text>
            </TouchableOpacity> */}
           
          </View>
        </View>

        <View style={{ marginBottom: 10, width: "90%", padding: 10, alignSelf: "center" }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: "900", color: "gray" }}>Google Project Management</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Google</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Professional Certificate</Text>
              <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <Entypo name={'star'} size={10} color={'black'} />
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>4.8(13.8k)</Text>
              </View>
            </View>
            {/* <TouchableOpacity onPress={()=>navigation.navigate("Computer Science Programming wit Pur..")}>
              <Entypo name={'chevron-right'} size={22} color={'#38BDE6'} />
            </TouchableOpacity> */}
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: "900", color: "gray" }}>AI For Business</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>University of Pennsylvania</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Specialization</Text>
              <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <Entypo name={'star'} size={10} color={'black'} />
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>4.8(13.8k)</Text>
              </View>
            </View>
            {/* <TouchableOpacity onPress={()=>navigation.navigate("Cryptography")}>
              <Entypo name={'chevron-right'} size={22} color={'#38BDE6'} />
            </TouchableOpacity> */}
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: "900", color: "gray" }}>Foundation marketing</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Google</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Course</Text>
              <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <Entypo name={'star'} size={10} color={'black'} />
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>4.8(13.8k)</Text>
              </View>
            </View>
            {/* <TouchableOpacity onPress={()=>navigation.navigate("Algorithm")}>
              <Entypo name={'chevron-right'} size={22} color={'#38BDE6'} />
            </TouchableOpacity> */}
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: "900", color: "gray" }}>Enterpreneurship</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>University of Maryland</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Course</Text>
              <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <Entypo name={'star'} size={10} color={'black'} />
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>4.8(13.8k)</Text>
              </View>
            </View>
            {/* <TouchableOpacity onPress={()=>navigation.navigate("CyberSecurity")}> 
              <Entypo name={'chevron-right'} size={22} color={'#38BDE6'} />
            </TouchableOpacity> */}
          </View>

        </View>

      </ScrollView>
    </View>
  )
}

export default BussinessScreen