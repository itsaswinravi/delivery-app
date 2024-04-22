import { StyleSheet, Text, View, Image ,TextInput, } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { FontAwesome } from '@expo/vector-icons';


import {Link} from 'expo-router'
import BottomSheet from './BottomSheet'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

const SearchBar = () =>(
    <View style={styles.searchcontainer}>
<View style={styles.searchSection}>
   <View style={styles.searchField}>
   <FontAwesome  style={styles.searchIcon}name="search" size={24} color="#9F9AA1" />
<TextInput style={styles.input} placeholder='Restaurants,groceries,dishes'/>
   </View>
   <Link href={'/(modal)/filter'} asChild>
    <TouchableOpacity style={styles.optionButton}>
    <Ionicons name="options-outline" size={20} color={Colors.primary}/>
    </TouchableOpacity>
   </Link>
</View>
    </View>
)


const CustomHeader = () => {
    const bottomSheetRef = useRef<BottomSheetModal> (null);
    const openModal = () => {
       bottomSheetRef.current?.present()
    }
  return (
    
    <SafeAreaView style={styles.SafeAreaView}>
        <BottomSheet ref={bottomSheetRef}/>
        <View style={styles.container}>
            <TouchableOpacity onPress={openModal}>
                <Image style={styles.bike} source ={require('@/assets/images/bike.png')} />
            </TouchableOpacity>

      <TouchableOpacity style={styles.titlecontainer} onPress={openModal}>
        <Text style={styles.title}>Delivery . Now</Text>
        <View style={styles.locationName}>
            <Text style={styles.subtitle}>London</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary}/>


        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileButton}>
      <Ionicons name="person-outline" size={20} color={Colors.primary}/>
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
flex: 1,
backgroundColor: Colors.lightGrey,
borderRadius: 8,
flexDirection:'row',
alignItems: 'center'
},

optionButton:{
padding: 10,
borderRadius: 50, 
paddingRight:-30
},
input :{
    padding:10,
    color: Colors.mediumDark
},

searchIcon:{
paddingLeft:10
}
    
})

export default CustomHeader