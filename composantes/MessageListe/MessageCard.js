import React from 'react';
import {View, Text,Image, TouchableOpacity} from 'react-native';
import relativeTime from 'dayjs/plugin/relativeTime'
import styles from './style';
import dayjs from 'dayjs';
dayjs.extend(relativeTime);
const MessageCard = ({item,navigation}) => {
    return (
        <View>
            <TouchableOpacity style={styles.messagesContainer} 
            onPress={()=>navigation.navigate('MessageDetails',item)}>
                <Image source={require('../../assets/profile.jpg')} style={styles.messageImg} /> 
                <View style={styles.messageInfo}>
                    <View style={styles.date_name}>
                        <Text style={styles.name}>{item.full_name}</Text>
                        <Text>{dayjs(item.date).fromNow(true)}</Text>
                    </View>
                    <Text>{item.last_message}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}


export default MessageCard;
