import { View, Text, ScrollView,Image } from 'react-native'
import React from 'react'
import './style.js'
import dashboardStyles from './style.js'
import { FakeActivity } from '../../FakeData/fakeActivity.js'
import Activity from '../../composantes/ActivityHomeScreen/Index.js'
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
          <Activity Data={FakeActivity}/>
        {/*Fin liste d'activités*/}
      </ScrollView>
    </View>
  )
}

export default Home