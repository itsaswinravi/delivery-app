import { StyleSheet, Text, View, Image, ListRenderItem, SectionList } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import ParallaxScrollView from '@/Components/ParallaxScrollView'
import Colors from '@/constants/Colors'
import { restaurant } from '@/assets/data/restaurant'
import { Link, useNavigation } from 'expo-router'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Animated from 'react-native-reanimated'
const Details = () => {
    const navigation = useNavigation()
    const [activeIndex, setActiveIndex] = useState(0)
    const DATA=restaurant.food.map((item,index)=>({
        title:item.category,
        data:item.meals,
        index,
      }))
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
              <TouchableOpacity  style={styles.roundButton}>
                <Ionicons name="share-outline" size={24} color={Colors.primary} />
    
              </TouchableOpacity>
              <TouchableOpacity style={styles.roundButton}>
                <Ionicons name="search-outline" size={24} color={Colors.primary} />
    
              </TouchableOpacity>
            </View>
          )
        })
      },[])
      const selectCategory = (index: number) => {
        setActiveIndex(index)
      }
    
      const renderItem:ListRenderItem<any>=({item,index})=>(
        <Link href={'/'} asChild>
    
        <TouchableOpacity style={styles.item}>
          <View style={{flex:1}}>
    
          <Text style={styles.dish}>{item.name}</Text>
          <Text style={styles.dishText}>{item.info}</Text>
          <Text style={styles.dishText}>${item.price}</Text>
          </View>
          <Image source={item.img} style={styles.dishImage}/>
        </TouchableOpacity>
        </Link>
      )
      return (
        <>
          <ParallaxScrollView backgroundColor={'#fff'} style={{ flex: 1 }}
            parallaxHeaderHeight={250}
            stickyHeaderHeight={100}
            renderBackground={() => <Image source={restaurant.img} style={{ height:300,width:'100%'}} />}
    
            contentBackgroundColor={Colors.lightGrey}
            renderStickyHeader={() => (
              <View key="sticky-header" style={styles.stickySection}>
                <Text style={styles.stickySectionText}>{restaurant.name}</Text>
              </View>
            )}>
    
            <View style={styles.detailsContainer}>
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              <Text style={styles.restaurantDescription}>{restaurant.delivery} . {restaurant.tags.map((tag,index)=>(
                `${tag}${index === restaurant.tags.length - 1 ? '.' : ''}`
              ))}
              </Text>
              <Text style={styles.restaurantDescription} >{restaurant.about}
              </Text>
              <SectionList
              contentContainerStyle={{paddingBottom:50}}
              keyExtractor={(item,index)=>`${item.id+index}`}
            scrollEnabled={false}  sections={DATA} renderItem={renderItem}
              ItemSeparatorComponent={()=>
              <View style={{height:1,backgroundColor:Colors.grey,marginHorizontal:20}}/>}
              SectionSeparatorComponent={()=>
              <View style={{height:1,backgroundColor:Colors.grey}}/>}
    
              renderSectionHeader={({section:{title,index}})=>(
                 <Text style={styles.sectionHeader}>{title}</Text>
              )}
              />
            </View>
    
          </ParallaxScrollView>
          <Animated.View style={[styles.stickySegments]}>
            <View style={styles.segmentsShadow} >
                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal:16}}>
                    {restaurant.food.map ((item,index) => (
                        <TouchableOpacity key={index} style={activeIndex === index ? styles.
                            segmentButtonActive : styles.segmentButton} onPress={ () => selectCategory(index)} >
                        
                            <Text style={activeIndex === index ? styles.
                            segmentTextActive : styles.segmentText}>{item.category}</Text>
                        </TouchableOpacity>
                    ))}</ScrollView>                   
                </View>

          </Animated.View>
    
        </>
      )
    }
    export default Details
    const styles = StyleSheet.create({
      detailsContainer: {
        backgroundColor: Colors.lightGrey
      },


      stickySection:
       {
        backgroundColor: '#fff',
        marginLeft:70,
        height:100,
        justifyContent:'flex-end'
      },
      
      roundButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },

      item:{
        backgroundColor:"#fff",
        padding:16,
        flexDirection:'row'
    
      },


      bar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    
      },
      dish:{
        fontSize:16,
        fontWeight:"bold"
      },


      dishText:
      {
        fontSize:14,
        color:Colors.mediumDark,
        paddingVertical:4
      },
      dishImage:
      {
        height:80,
        width:80,
        borderRadius:4

      },
    
      sectionHeader:
      {
        fontSize:20,
        fontWeight:"bold",
        marginTop:40,
        margin:16
      },
      stickySectionText:
      {
        fontSize:20,
        fontWeight:"bold",
        color:Colors.primary,
        margin:10
      },

      restaurantDescription:{
        fontSize:16,
        margin:16,
        lineHeight:22,
        color:Colors.medium
      },

      restaurantName:{
        fontSize:30,
        margin:16
    
      },
      stickySegments: {
position: 'absolute',
height: 50,
left: 0,
right: 0,
top: 110,
backgroundColor: '#fff'
      },
      segmentsShadow: {
justifyContent: 'center',
paddingTop: 10,
shadowColor: '#000',
shadowOffset: {width: 0, height: 4},
shadowOpacity: 0.2
      },

      segmentButton:{
        paddingHorizontal: 16,
        paddingVertical:4,
        borderRadius: 50
      },
      segmentText:{
        color: Colors.primary,
       
        fontSize: 16,
        elevation:5,
        width:'100%',
        height: '100%'
      },
      segmentButtonActive:{
        backgroundColor: Colors.primary,
        paddingHorizontal: 16,
        paddingVertical:4,
        borderRadius: 50
      },
      segmentTextActive:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
      }
    
    })
    
