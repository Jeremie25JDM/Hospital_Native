import React from 'react';
import {View, StyleSheet,FlatList, TouchableOpacity,Text,Image} from 'react-native';
import dashboardStyles from '../../ecrans/Home/style';

const DoctorCard = ({Data}) => {
    return (
        <View style={dashboardStyles.docteur_container}>  
            {
                Data.map((item,index)=>{
                    return(
                    <TouchableOpacity  style={dashboardStyles.doctorCard} key={item.id} >
                        <Image source={require('../../assets/profile.jpg')} style={dashboardStyles.doctorImg}/> 
                        <View style={dashboardStyles.doctorinfos}>
                            <Text style={dashboardStyles.doctorfullname}>{item.fulname}</Text>
                            <Text style={dashboardStyles.doctorspeciality}>{item.speciality}</Text>
                        </View>
                    </TouchableOpacity>
                    )
 
                })
            }
        
        </View>
    );
}

const styles = StyleSheet.create({})

export default DoctorCard;
