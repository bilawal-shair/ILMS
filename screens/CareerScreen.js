import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const CareerScreen = () => {
  return (
    <View style={{ flex: 1, width: "100%", height: "100%", backgroundColor: "#fff" }}>

      <ScrollView style={{ marginBottom: "30%", top: "5%" }}>

        <View style={{ flexDirection: "row", marginLeft: "10%", marginTop: "1%" }}>
          <Text style={{ fontSize: 25, fontWeight: "900", color: "black" }}>ILMS</Text>
          <Text style={{ fontSize: 12, fontWeight: "600", color: "black", left: "20%", marginTop: "3%" }}>Career</Text>
        </View>

        <View style={{ marginLeft: "7%", marginTop: "5%" }}>
          <Text style={{ fontSize: 14, fontWeight: "900", color: "black" }}>What job role interested you ?</Text>
        </View>

        <View style={{ marginLeft: "7%", marginTop: "3%" }}>
          <Text style={{ fontSize: 14, fontWeight: "600", color: "black" }}>Pick one below, and we suggest a learn path to</Text>
        </View>

        <View style={{ marginLeft: "7%", marginTop: "2%" }}>
          <Text style={{ fontSize: 14, fontWeight: "600", color: "black" }}>get you started (you can update this at any time)</Text>
        </View>

        <View style={{ marginLeft: "7%", marginTop: "5%" }}>
          <Text style={{ fontSize: 14, fontWeight: "900", color: "black" }}>Data Science & Analyst (3)</Text>
        </View>

        <View style={{ marginBottom: "1%", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "95%", padding: 30, alignSelf: "center" }}>

          <View style={{ justifyContent: "center", alignItems: "center", width: "35%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 2 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              Data Analyst
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center", width: "35%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 2 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              Data Science
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 2 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              Data Engineering
            </Text>
          </View>
        </View>

        <View style={{ marginLeft: "7%", marginTop: "1%" }}>
          <Text style={{ fontSize: 14, fontWeight: "900", color: "black" }}>software Engineeringn & IT (8)</Text>
        </View>

        

       
        <View style={{ marginBottom: "1%", flexDirection: "row", width: "95%", padding: 10,  alignSelf: "center" }}>

          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              Back End Developer
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              Development
            </Text>
          </View>

        </View>
        <View style={{ marginBottom: "1%", flexDirection: "row", width: "95%", padding: 10,  alignSelf: "center" }}>

          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              UX Design
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              Product Manager
            </Text>
          </View>

        </View>

        <View style={{ marginBottom: "1%", flexDirection: "row", width: "95%", padding: 10,  alignSelf: "center" }}>

          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              Full Stack Developer
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              Application Developer
            </Text>
          </View>

        </View>

        <View style={{ marginBottom: "1%", flexDirection: "row", width: "95%", padding: 10,  alignSelf: "center" }}>

          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              IT Manager
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              ios Developer
            </Text>
          </View>


        </View>

        <View style={{ marginLeft: "7%", marginTop: "5%" }}>
          <Text style={{ fontSize: 14, fontWeight: "900", color: "black" }}>Sales  And Marketing(4)</Text>
        </View>

        <View style={{ marginBottom: "1%", flexDirection: "row", width: "95%", padding: 10,  alignSelf: "center" }}>

          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              Digital Marketing
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              Social Media
            </Text>
          </View>

        </View>

        <View style={{ marginBottom: "1%", flexDirection: "row", width: "95%", padding: 10,  alignSelf: "center" }}>

          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              Data Analyst
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              Sales development 
            </Text>
          </View>

        </View>

        <View style={{ marginLeft: "7%", marginTop: "5%" }}>
          <Text style={{ fontSize: 14, fontWeight: "900", color: "black" }}>Bussiness(4)</Text>
        </View>

        <View style={{ marginBottom: "1%", flexDirection: "row", width: "95%", padding: 10,  alignSelf: "center" }}>

          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              Project Manager
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              Bookkeeper
            </Text>
          </View>

        </View>

        <View style={{ marginBottom: "1%", flexDirection: "row", width: "95%", padding: 10,  alignSelf: "center" }}>

          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              Supply chain Anlyst
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center", width: "45%", padding: 15, borderWidth: 1, borderColor: "gray", borderRadius: 30, marginHorizontal: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "900", color: "black" }}>
              Career Coach
            </Text>
          </View>

        </View>


        <View style={{ marginLeft: "7%", marginTop: "3%" }}>
          <Text style={{ fontSize: 12, fontWeight: "600", color: "gray" }}>* Median salary and job opening data are sourced from united</Text>
        </View>
        <View style={{ marginLeft: "7%", marginTop: "3%" }}>
          <Text style={{ fontSize: 12, fontWeight: "600", color: "gray" }}> States Light Cast" Job postings Report. Data for job roles</Text>
        </View>
        <View style={{ marginLeft: "7%", marginTop: "3%" }}>
          <Text style={{ fontSize: 12, fontWeight: "600", color: "gray" }}> relevant featured programs (7/1/2022-6/30/2023)</Text>
        </View>


      










      </ScrollView>

    </View>
  )
}

export default CareerScreen