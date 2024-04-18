import { StyleSheet, Text, View, Image, Link } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = () =>
    <View style={styles.searchcontainer}>
<View style={styles.searchSection}>
   <View style={styles.searchField}>
<TextInput placeholder='Search'/>
   </View>
   <Link href={'/'} asChild>
    <TouchableOpacity style={styles.optionButton}>
    <FontAwesome name="search" size={24} color="black" />
    </TouchableOpacity>
   </Link>
</View>
    </View>



const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.bike} source ={require('@/assets/images/bike.png')} />
            </TouchableOpacity>
      <TouchableOpacity style={styles.titlecontainer}>
        <Text style={styles.title}>Delivery . Now</Text>
        <View style={styles.locationName}>
            <Text style={styles.subtitle}>London</Text>
            <AntDesign name="down" size={18} color="#20E1B2" />


        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileButton}>
      <FontAwesome name="user" size={24} color="#20E1B2" />
                  </TouchableOpacity>
      </View>
      
      <SearchBar />
      
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor:'#fff'
    },
    container: {
        height:60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap:20,
        alignItems: 'center' ,
        justifyContent: 'space-between',
        paddingHorizontal: 20,

    },
    bike: {
        width: 30,
        height: 30
    },
    titlecontainer:{
        // flex: 1, 
        paddingRight:220  
    },
    title:{
fontSize:14,
color: Colors.medium
    },
    subtitle:{
fontSize:18,
fontWeight: 'bold',
    },
    locationName:{
flexDirection: 'row',
alignItems: 'center',
    },
    searchcontainer :{
height: 60,
backgroundColor: '#fff',
    },
profileButton:{
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
},
searchSection :{
flexDirection: 'row',
gap: 10,
flex: 1,
paddingHorizontal: 20,
alignItems: 'center'
},
searchField:{
flex: 1
},
optionButton:{
padding: 10,
borderRadius: 50
}
    
})

export default CustomHeader