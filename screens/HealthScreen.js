import { View, Text, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native'

const HealthScreen = () => {

  const navigation = useNavigation();
  return (
    <View style={{ width: "100%", height: "100%", }}>
        
         <ScrollView style={{ marginBottom: "30%", top: "5%" }}>

        <View style={{ flexDirection: "row", width: "95%", padding: 16, alignSelf: "center", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: "900", color: "black" }} >HealthScreen</Text>

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
            <TouchableOpacity style={{ borderRadius: 10, width: 170, height: 60, backgroundColor: "#000080", marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: "900", color: "#fff" }}>
               Research
              </Text>
            </TouchableOpacity>
            <TouchableOpacity   style={{ borderRadius: 10, width: 120, height: 60, backgroundColor: "#800000", marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: "900", color: "#fff" }}>
               Health Informatics
              </Text>
            </TouchableOpacity >
            <TouchableOpacity  style={{ borderRadius: 10, width: 170, height: 60, backgroundColor: "#006400", marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: "900", color: "#fff" }}>
               Basic Science
              </Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{ borderRadius: 10, justifyContent: "center", alignItems: "center", width: 170, height: 60, backgroundColor: "#0000CD", marginHorizontal: 5 }}>
              <Text style={{ fontSize: 14, fontWeight: "900", color: "#fff" }}>
               Public Health
              </Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{ borderRadius: 10, width: 180, height: 60, backgroundColor: "#008B8B", marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: "900", color: "#fff" }}>
                Animal Health
              </Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{ borderRadius: 10, justifyContent: "center", alignItems: "center", width: 110, height: 60, backgroundColor: "#8B4513", marginHorizontal: 5 }}>
              <Text style={{ fontSize: 14, fontWeight: "900", color: "#fff" }}>
                HealthCare 
              </Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{ borderRadius: 10, justifyContent: "center", alignItems: "center", width: 180, height: 60, backgroundColor: "#778899", marginHorizontal: 5 }}>
              <Text style={{ fontSize: 14, fontWeight: "900", color: "#fff" }}>
                Psychology
              </Text>
            </TouchableOpacity>
           
          </ScrollView>
        </View>
        <View style={{ marginBottom: "2%", top: "5%", flexDirection: "row", width: "95%", padding: 16, alignSelf: "center", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: "900", color: "black" }} >Better Health and Healthy Lifestyle </Text>

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

              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/close-up-student-with-his-homework_1098-332.jpg?ga=GA1.1.1155509870.1697629433&semt=ais_user" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                  Google Data Analytics
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
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                  Google CyberSecurity
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
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/black-businessman-using-computer-laptop_53876-14803.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                Google Digital Marketing & E-commerce
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
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/modern-office-desk-composition-with-technological-device_23-2147915796.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                Google UX Design
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
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/premium-photo/business-man-with-laptop-cafe_1303-7027.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                Python for Everybody
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
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1399.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                IBM Data Science
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                  IBM
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

          </ScrollView>
        </View>

        <View style={{ marginBottom: "1%", bottom: "3%", flexDirection: "row", width: "90%", padding: 16, alignSelf: "center", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: "900", color: "black" }} >How to Prepare for Medical School</Text>


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
              <Image style={{ width: 140, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/royal-palace-madrid-spain_1398-4247.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                   Master Bussiness Administration (iMBA)
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                University of Maryland Global Campus
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
              Get Started With this free courses
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
              <Text style={{ fontSize: 15, fontWeight: "900", color: "gray" }}>Computer Science: Programming with a purpose</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Princeton University</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Course</Text>
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
              <Text style={{ fontSize: 15, fontWeight: "900", color: "gray" }}>Cryptography 1</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Princeton University</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Course</Text>
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
              <Text style={{ fontSize: 15, fontWeight: "900", color: "gray" }}>Algorithm Part 1</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Princeton University</Text>
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
              <Text style={{ fontSize: 15, fontWeight: "900", color: "gray" }}>CyberSecurity for Everyone</Text>
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

export default HealthScreen