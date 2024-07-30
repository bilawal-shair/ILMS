import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Mysql = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading indicator

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.18.104:1348/api/tenthstud');
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false); // After fetching data, set loading to false
    } catch (error) {
      console.error(error);
      setLoading(false); // In case of error, set loading to false as well
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>

      <View style = {{width:"100%",height:"8%"}}>
        <Text style={{ fontSize: 18, fontWeight: "900", color: "#008B8B", alignSelf: "center", top: 20 }}>Student Data Using MySql</Text>
      </View>
     
      <View style = {{width:"100%",height:"90%",backgroundColor:"#E0E0E0"}}>

      {loading ? ( // Displaying loader if loading is true
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#66B2FF" />
        </View>
      ) : (
          <FlatList

           style = {{bottom:8}}
            
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ elevation: 10, alignSelf: "center", marginVertical: 7, width: "90%", height: 95, backgroundColor: "white", alignItems: "center", top: "20%", borderRadius: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%" }}>
                  <View style={{ alignItems: "flex-start" }}>
                    <Text style={{ color: "black", fontSize: 14, fontWeight: "900" }}>ID :</Text>
                    <Text style={{ color: "black", fontSize: 16 }}>Name :</Text>
                    <Text style={{ color: "black", fontSize: 16 }}>Age :</Text>
                    <Text style={{ color: "black", fontSize: 16 }}>Address :</Text>
                  </View>
                  <View style={{ alignItems: "flex-end" }}>
                    <Text style={{ color: "black", fontSize: 14, fontWeight: "900" }}>{item.id}</Text>
                    <Text style={{ color: "black", fontSize: 16 }}>{item.name}</Text>
                    <Text style={{ color: "black", fontSize: 16 }}>{item.age}</Text>
                    <Text style={{ color: "black", fontSize: 16 }}>{item.address}</Text>
                  </View>
                </View>
              </View>
            )}
           
          />
         )}

      </View>
    </View>
  );
};

export default Mysql;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
