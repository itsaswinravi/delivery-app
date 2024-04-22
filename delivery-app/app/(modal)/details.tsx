import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import ParallaxScrollView from '@/Components/ParallaxScrollView'
import Colors from '@/constants/Colors'
import { restaurant } from '@/assets/data/restaurant'
import { useNavigation } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
const Details = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
       navigation.setOptions({
        headerTransparent: true,
        headerTitle:'',
        headerTintColor: Colors.primary,
        headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()} style={styles.roundButton}>
            <Ionicons name='arrow-back' size={24} color={Colors.primary} />
        </TouchableOpacity>),
        headerRight: () => (
            <View style={styles.bar}>
<TouchableOpacity style={styles.roundButton}>
            <Ionicons name='share-outline' size={24} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity  style={styles.roundButton}>
            <Ionicons name='search-outline' size={24} color={Colors.primary} />
        </TouchableOpacity>
            </View>
        )
    })
    },[])

  return (
    <View>
     <>
     <ParallaxScrollView backgroundColor={'#fff'}style= {{flex:1}}
      parallaxHeaderHeight={100} 
      stickyHeaderHeight={50} renderBackground={( ) => <Image source= {restaurant.img} style={{width:'100%',height:300}} />}
      contentBackgroundColor={Colors.lightGrey}
      renderStickyHeader={() => (
        <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{restaurant.name}</Text>
            </View>
      )}>
     
        <View style={styles.detailContainer}>
            <Text style={styles.restaurantName}> {restaurant.name}</Text>
            <Text style={styles.restaurantDescription}> {restaurant.delivery} . </Text>

        </View>
        </ParallaxScrollView>
     </>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    detailContainer:{
        backgroundColor: Colors.lightGrey
    },
    stickySection:{
backgroundColor: '#fff',
marginLeft: 70,
height:100,
justifyContent: 'flex-end'
    },
    roundButton:{
        width: 40,
        height:40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    bar:{
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
       gap:10, 
    },
    stickySectionText:{
        fontSize: 20,
        margin: 10
    },
    restaurantName:{

    },
    restaurantDescription:{
        
    }
})