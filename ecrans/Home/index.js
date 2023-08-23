import { View, Text, ScrollView,Image, FlatList } from 'react-native'
import React from 'react'
import './style.js'
import dashboardStyles from './style.js'
import { FakeActivity } from '../../FakeData/fakeActivity.js'
const Home = () => {
  return (
    <View>
      <ScrollView>

        {/*debut header*/}
        <View style={dashboardStyles.header}>
          <Text style={dashboardStyles.userName}>
            Jeremie ndeke
          </Text>
          <Image source={require('../../assets/profile.jpg')} style={dashboardStyles.userImg}/>
        </View>
        {/*fin header*/}

        {/*liste d'activités*/}
         <FlatList 
         data={FakeActivity}
         keyExtractor={item=>item.id}
         renderItem={({item})=>{
          
         }}
         horizontal={true}/>
        {/*Fin liste d'activités*/}
      </ScrollView>
    </View>
  )
}

export default Home