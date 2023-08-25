import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import "./style.js";
import dashboardStyles from "./style.js";
import { FakeActivity } from "../../FakeData/fakeActivity.js";
import { Fakesymptome } from "../../FakeData/fakeSymptomes.js";
import Activity from "../../composantes/ActivityHomeScreen/Index.js";
import SymptomeAct from "../../composantes/SymtomesActivity/index.js";
import DoctorCard from "../../composantes/Doctors/index.js";
import { FakeDoctor } from "../../FakeData/FakeDoctor.js";
const Home = () => {
  return (
    <View>
      <ScrollView>
        {/*debut header*/}
        <View style={dashboardStyles.header}>
          <Text style={dashboardStyles.userName}>Jeremie ndeke</Text>
          <Image
            source={require("../../assets/profile.jpg")}
            style={dashboardStyles.userImg}
          />
        </View>
        {/*fin header*/}
        {/*liste d'activités*/}
        <Activity Data={FakeActivity} />
        {/*Fin liste d'activités*/}

        {/*Symptomes*/}
        <View>
          <SymptomeAct Data={Fakesymptome} />
        </View>
        {/*Fin symptomes */}
        {/*Nos Docteurs*/}
        <View style={dashboardStyles.title_space}>
          <Text style={dashboardStyles.text_bold}>Nos Docteurs</Text>
          <TouchableOpacity>
            <Text style={dashboardStyles.Link}> Afficher tout</Text>
          </TouchableOpacity>
        </View>
        {/*Fin nos Docteurs*/}

        {/*Plus de docteurs*/}
        <DoctorCard Data={FakeDoctor} />
      </ScrollView>
    </View>
  );
};

export default Home;
