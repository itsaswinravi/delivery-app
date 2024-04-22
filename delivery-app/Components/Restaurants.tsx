import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { restaurants } from '@/assets/data/home'
import { Link } from 'expo-router'
import { TouchableOpacity } from '@gorhom/bottom-sheet'
import Colors from '@/constants/Colors'

const Restaurants = () => {
  return (
   <ScrollView horizontal showsHorizontalScrollIndicator= {false}
   contentContainerStyle={{padding:15}}
   >
    {restaurants.map((restaurant, index) => (
        <Link href={'/details'} key={index} asChild>
            <TouchableOpacity>
        <View style={styles.categoryCard}>
            <Image source={restaurant.img} style={styles.image}/>
            <View style={styles.categoryBox}>
<Text style={styles.categoryText}>{restaurant.name}</Text>
<Text style={{color:Colors.green}}>{restaurant.rating}{restaurant.ratings}</Text>
<Text style={{color:Colors.medium}}>{restaurant.distance}</Text>

            </View>
            
        </View>
        </TouchableOpacity>
        </Link>
    ))}
   </ScrollView>
  )
}

export default Restaurants

const styles = StyleSheet.create({
    categoryCard: {
        width: 300,
        height:250,
        backgroundColor: '#fff',
        marginEnd: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.06,
        borderRadius:4
    },
    categoryText:{
paddingVertical: 5,
fontSize: 14,
fontWeight: 'bold',
    },
    imageContainer: {

    },
    image:{
       flex:5,width:undefined,height:undefined 
    },
    categoryBox:{
flex:2,
padding:10
    }
})