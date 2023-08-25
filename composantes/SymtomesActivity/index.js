import React from 'react';
import {View, StyleSheet,FlatList, TouchableOpacity,Text,Image} from 'react-native';
import dashboardStyles from '../../ecrans/Home/style';

const SymptomeAct = ({Data}) => {
    return (
        <View >
            <Text style={dashboardStyles.SympomeTxt}>Quel symptomes avez -vous ?</Text>
               <FlatList 
                data={Data}
                style={dashboardStyles.scrollableListe}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item=>item.id}
                renderItem={({item})=>{
                return(
                    <TouchableOpacity  style={dashboardStyles.symptomeItem} >
                        <Image source={require('../../assets/image/undraw_doctor_kw5l.png')} style={dashboardStyles.imageSymptome}/> 
                        <Text style={dashboardStyles.subText}>{item.libelle}</Text>
                    </TouchableOpacity>         
                )
                }}
                horizontal={true}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default SymptomeAct;
