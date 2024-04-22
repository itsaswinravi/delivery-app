import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'
import { useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '@/constants/Colors';
// process.env.EXPO_PUBLIC_GOOGLE_API_KEY
const LocationSearch = () => {
    const navigation=useNavigation();
    const [location, setLocation] = useState({
      latitude: 51.5078788,
      longitude: -0.0877321,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02
    })
  
  return (
    <View style={{flex: 1}} >
     <MapView showsUserLocation={true} style={styles.map} region={location} />

     
     <View style= {styles.absoluteBox}>
<TouchableOpacity style={styles.button} onPress={() => navigation.goBack}>
    <Text style={styles.buttonText}>Confirm</Text>
</TouchableOpacity>
     </View>
    </View>
  )
}

export default LocationSearch

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    absoluteBox: {
position: 'absolute',
bottom: 20,
width: '100%'
        
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 16,
        margin:16,
        alignItems: 'center',
borderRadius: 8

    },
    buttonText:{
color: '#fff',
fontWeight: 'bold',
fontSize: 16
    }
})