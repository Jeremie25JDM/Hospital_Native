import React from 'react';
import {View, StyleSheet,Text, FlatList} from 'react-native';
import { fakeMessageListe } from '../../FakeData/FakeListeMessage';
import MessageCard from '../../composantes/MessageListe/MessageCard';
import styles from '../../composantes/MessageListe/style';
const Message = ({navigation}) => {
    return (
        <FlatList
        data={fakeMessageListe}
        keyExtractor={item=>item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.globalContainer}
        renderItem={({item})=>{
            return(
                <MessageCard item={item} navigation={navigation}/>
            )
        }}
        />
    );
}


export default Message;
