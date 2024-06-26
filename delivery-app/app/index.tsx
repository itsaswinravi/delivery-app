import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Categories from '@/Components/Categories'
import { SafeAreaView } from 'react-native-safe-area-context'
import Restaurants from '@/Components/Restaurants'
import Colors from '@/constants/Colors'

const  Page = () => {
  return (
    <SafeAreaView style={styles.container} >
     <ScrollView contentContainerStyle={{paddingBottom: 40}}>
      <Categories />
      <Text style={styles.header}>Top picks in your neighbourhood</Text>
      <Restaurants />
      <Text style={styles.header}>Offers near you</Text>
      <Restaurants />
     </ScrollView>
    </SafeAreaView>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
top: 80,
backgroundColor: Colors.lightGrey
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:16,
    marginBottom: 8,
    paddingHorizontal: 16
  },

})