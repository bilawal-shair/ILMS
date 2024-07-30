import { View, Text, ScrollView ,StyleSheet} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const AlgorithmScreen= () => {
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>

      <View style={{ width: "98%", height: "40%", backgroundColor: "#D3212D", alignSelf: "center", alignItems: "flex-start", justifyContent: "space-evenly" }}>

        <Text style={{ left: "3%", fontSize: 16, fontWeight: "900", color: "#fff" }} >
          Algorithm Part 1
        </Text>

        <Text style={{ left: "3%", fontSize: 12, fontWeight: "600", color: "#fff" }} >
          Taught in English . 21 Languages available
        </Text>
        <View>
          <Text style={{ left: "3%", fontSize: 10, fontWeight: "600", color: "#fff" }} >
            offerd by
          </Text>

          <Text style={{ left: "3%", fontSize: 20, fontWeight: "900", color: "#fff" }} >
            Princton University
          </Text>
        </View>
      </View>


      <View style={{ top: "3%" }}>
        <Text style={{ left: "3%", fontSize: 20, fontWeight: "900", color: "black" }} >
          About This Course
        </Text>
        <Text style={{ left: "3%", fontSize: 14, fontWeight: "600", color: "black" }} >
          The basic education in the last millinium was
        </Text>
        <Text style={{ left: "3%", fontSize: 14, fontWeight: "600", color: "black" }} >
          "reading writing and arthmetic",now it is reading and computing
        </Text>
        <Text style={{ left: "3%", fontSize: 14, fontWeight: "600", color: "black" }} >
          essential part of educatiuon of every student,not just in
        </Text>
        <Text style={{ left: "3%", fontSize: 14, fontWeight: "600", color: "black" }} >
          The science and Engineer
        </Text>
        <Text style={{ left: "3%", fontSize: 14, fontWeight: "600", color: "blue" }} >
          more......
        </Text>
      </View>


      <View style={{ top: "8%", marginLeft: "3%" }}>
      <View>
        <Text style={styles.title}>
          <Icon name="laptop" size={20} color="black" /> 100% Online
        </Text>
        <Text style={styles.subtitle}>
          start instantly and learn at your schedule
        </Text>
      </View>

      <View>
        <Text style={styles.title}>
          <Icon name="calendar" size={20} color="black" /> Flexible Deadline
        </Text>
        <Text style={styles.title}>
          <Icon name="level-up" size={20} color="black" /> Beginner Level
        </Text>
      </View>

      <Text style={styles.subtitle}>
        <Icon name="check" size={14} color="black" /> No prior experience required
      </Text>

      <View>
        <Text style={styles.subtitle}>
         English
        </Text>
        <Text style={styles.subtitle}>
         Subtitle: Arabic, French, Bangla, Ukrain, Chinese
        </Text>
        <Text style={styles.subtitle}>
          Arabic, French, Bangla, Ukrain, India
        </Text>
        <Text style={styles.subtitle}>
          French, Bangla, Ukrain, Chinese, Arabic
        </Text>
        <Text style={styles.subtitle}>
          Ukrain, Chinese, Subtitle: Arabic, French
        </Text>
      </View>
    </View>
    </View>
  )
}

export default AlgorithmScreen

const styles = StyleSheet.create({
  title: {
    left: "3%",
    fontSize: 20,
    fontWeight: "900",
    color: "black",
    flexDirection: 'row',
    alignItems: 'center'
  },
  subtitle: {
    marginLeft: "5%",
    fontSize: 14,
    fontWeight: "600",
    color: "black",
    flexDirection: 'row',
    alignItems: 'center'
  }
});