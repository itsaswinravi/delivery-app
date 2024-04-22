import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getDishById } from '@/assets/data/restaurant'
import Colors from '@/constants/Colors'

const Dish = () => {
    const {id} = useLocalSearchParams()
    const item = getDishById(+id)
  return (
    <View style={styles.container}>
      <Image source = {item?.img} style={styles.image} />
      <View style={{padding: 20}}>
        <Text style={styles.dishName}>{item?.name}</Text>
        <Text style={styles.dishInfo}>{item?.info}</Text>
      </View>
    </View>
  )
}
    


export default Dish

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 300
    },
    dishName:{
fontSize: 24,
fontWeight: 'bold',
marginBottom:8
    },
    dishInfo:{
      fontSize: 16,
      color: Colors.mediumDark,  
    }
})