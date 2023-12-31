import React from 'react';
import {View, StyleSheet,FlatList, TouchableOpacity,Text,Image} from 'react-native';
import dashboardStyles from '../../ecrans/Home/style';

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
                    <TouchableOpacity  style={dashboardStyles.scrollableItem} >
                        <Image source={require('../../assets/image/undraw_medicine_b1ol.png')} style={dashboardStyles.imageStyle}/> 
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
