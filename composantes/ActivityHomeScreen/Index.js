import React from 'react';
import {View, StyleSheet,FlatList, TouchableOpacity,Text} from 'react-native';
import dashboardStyles from '../../ecrans/Home/style';
import Undraw_medicine from "../../assets/image/Undraw_medicine.svg";
const Activity = ({Data}) => {
    return (
        <View>
               <FlatList 
                data={Data}
                style={dashboardStyles.scrollableListe}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item=>item.id}
                renderItem={({item})=>{
                return(
                    <TouchableOpacity  style={dashboardStyles.scrollableItem}>
                    <Undraw_medicine width={48} height={48}/>
                    <Text style={dashboardStyles.mainText}>{item.mainText}</Text>
                    <Text style={dashboardStyles.subText}>{item.subText}</Text>
                    </TouchableOpacity>         
                )
                }}
                horizontal={true}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Activity;
