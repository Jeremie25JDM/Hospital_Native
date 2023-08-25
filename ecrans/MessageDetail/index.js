import { View, Text } from 'react-native'
import React,{useEffect} from 'react'

export default function MessageDetail({route,navigation}) {
    const {item}=route.params;
    useEffect(()=>{
        console.log(item)
        navigation.setOptions({title:"Jeremie"})
    })
  return (
    <View>
      <Text>ecrant de details</Text>
    </View>
  )
}