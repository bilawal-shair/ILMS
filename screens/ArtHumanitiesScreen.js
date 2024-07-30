import { View, Text, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native'

const ArtHumanitiesScreen = () => {

  const navigation = useNavigation();
  return (
    <View style={{ width: "100%", height: "100%", }}>


     
      <ScrollView style={{ marginBottom: "30%", top: "5%" }}>

        <View style={{ flexDirection: "row", width: "95%", padding: 16, alignSelf: "center", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: "900", color: "black" }} >Art and Humanities</Text>

          {/* <TouchableOpacity >
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
                History
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderRadius: 10, width: 120, height: 60, backgroundColor: "#800000", marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: "900", color: "#fff" }}>
               Music and Art
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderRadius: 10, width: 170, height: 60, backgroundColor: "#006400", marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: "900", color: "#fff" }}>
                Philosopy
              </Text>
            </TouchableOpacity>
          
          </ScrollView>
        </View>
        <View style={{ marginBottom: "2%", top: "5%", flexDirection: "row", width: "95%", padding: 16, alignSelf: "center", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: "900", color: "black" }} >Unleash Your Inner Artist</Text>

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

              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/african-man-painting-class-drawing-easel_1157-46861.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                 Modern Contemporary
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                 University of Pennsylvania
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                 Course
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Entypo name={'star'} size={10} color={'black'} />
                  <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                    4.9(567)
                  </Text>
                </View>

              </View>



            </View>
            <View style={{ borderRadius: 10, width: 150, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/top-view-attractive-woman-hands-drawing-amazing-picture-canvas-modern-cozy-art-workshop_574295-563.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                 Sharpened vision 
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                California institute 
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                 Course 
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Entypo name={'star'} size={10} color={'black'} />
                  <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                    4.8(1.7k)
                  </Text>
                </View>

              </View>
            </View>
            <View style={{ borderRadius: 10, width: 150, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/premium-photo/having-fun-futuristic-neon-lighting-young-african-american-man-studio_146671-37977.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                Photography Basics
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                 Michigan State University
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                 Specialization
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Entypo name={'star'} size={10} color={'black'} />
                  <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                    4.8(5.2k)
                  </Text>
                </View>

              </View>
            </View>
            <View style={{ borderRadius: 10, width: 150, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/medium-shot-man-clouds-double-exposure_23-2149303232.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
              Film, Images & Historical
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                University of London
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                  Course
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Entypo name={'star'} size={10} color={'black'} />
                  <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                    4.8(357)
                  </Text>
                </View>

              </View>
            </View>
            <View style={{ borderRadius: 10, width: 150, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/premium-photo/inspired-happy-black-man-painting-easel-inside-his-apartment-lots-potted-plants-abstract-painting-wall_352677-931.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
               Design: Creation of
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                 University of Pennsylvania
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                  Course 
                </Text>

                <View style={{ flexDirection: "row" }}>
                  <Entypo name={'star'} size={10} color={'black'} />
                  <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                    4.6
                  </Text>
                </View>

              </View>
            </View>
            <View style={{ borderRadius: 10, width: 150, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 130, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/full-shot-man-painting-watercolors_23-2150170340.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                Effective Communication 
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                 University of Colardo
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                 Specialization
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
          </TouchableOpacity>
          */}
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
                 Bachelor of Arts in 
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                  Geographical University
                </Text>
               </View>

            </View>
            <View style={{ borderRadius: 10, width: 160, height: 170, marginHorizontal: 5, justifyContent: "center", alignItems: "center" }}>
              <Image style={{ width: 140, height: 100, borderRadius: 10 }} source={{ uri: "https://img.freepik.com/free-photo/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany_181624-17876.jpg?ga=GA1.1.1155509870.1697629433&semt=sph" }} />
              <View style={{ top: "5%" }}>

                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                Bechlor and Sciences
                </Text>
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>
                University North Text
                </Text>
                

              </View>
            </View>
           

          </ScrollView>
        </View>
        <View style={{ marginBottom: 10, width: "90%", padding: 10, alignSelf: "center" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
            <Text style={{ fontSize: 15, fontWeight: "900", color: "black" }}>
              Virtual Museum Tour
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
              <Text style={{ fontSize: 15, fontWeight: "900", color: "gray" }}>Modern and Contemporary Art Design</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Modern Art</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Specialization</Text>
              <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <Entypo name={'star'} size={10} color={'black'} />
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>4.8(2.5k)</Text>
              </View>
            </View>
            {/* <TouchableOpacity>
              <Entypo name={'chevron-right'} size={22} color={'#38BDE6'} />
            </TouchableOpacity> */}
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: "900", color: "gray" }}>Modern  Art& Ideas</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Modern Art </Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Course</Text>
              <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <Entypo name={'star'} size={10} color={'black'} />
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>4.8(6.3k)</Text>
              </View>
            </View>
            {/* <TouchableOpacity >
              <Entypo name={'chevron-right'} size={22} color={'#38BDE6'} />
            </TouchableOpacity> */}
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: "900", color: "gray" }}>Fashion as Design</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Museum of Modern Art</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Course</Text>
              <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <Entypo name={'star'} size={10} color={'black'} />
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>4.8(13.8k)</Text>
              </View>
            </View>
            {/* <TouchableOpacity >
              <Entypo name={'chevron-right'} size={22} color={'#38BDE6'} />
            </TouchableOpacity> */}
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 15, fontWeight: "900", color: "gray" }}>Fashion as Design </Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>The Museum of Modern Art</Text>
              <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Course</Text>
              <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <Entypo name={'star'} size={10} color={'black'} />
                <Text style={{ fontSize: 10, fontWeight: "600", color: "black" }}>4.8(13.8k)</Text>
              </View>
            </View>
            {/* <TouchableOpacity > 
              <Entypo name={'chevron-right'} size={22} color={'#38BDE6'} />
            </TouchableOpacity> */}
          </View>

        </View>

      </ScrollView>
    </View>
  )
}

export default ArtHumanitiesScreen