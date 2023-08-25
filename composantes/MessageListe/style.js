import {StyleSheet} from 'react-native';
import { PADDING } from '../../outils/Constante';

export const styles = StyleSheet.create(
    {
        globalContainer:{
            paddingTop:50,
            paddingHorizontal:PADDING.horintal,
            paddingVertical:PADDING.vertical
        },
        messagesContainer:{
            flexDirection:"row",
            alignItems:"center",
            backgroundColor:"white",
            elevation:5,
            marginTop:15,
            paddingHorizontal:PADDING.horintal,
            paddingVertical:PADDING.vertical
        },
        messageImg:{
            width:50,
            height:50,
            borderRadius:50/2,
            marginRight:15
        },
        messageInfo:{
            flexDirection:"column",
            flex:1,
            paddingHorizontal:PADDING.horintal
        },
        date_name:{
            flexDirection:"row",
            justifyContent:'space-between',
            marginBottom:5,
        },
        name:{
            fontWeight:"bold",
            marginRight:5,

        }

    }
    )
export default styles