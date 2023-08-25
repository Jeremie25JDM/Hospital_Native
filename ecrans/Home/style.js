import {  StyleSheet } from "react-native";
import { PADDING } from "../../outils/Constante";

const dashboardStyles=StyleSheet.create({
    header:{
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center",
       paddingHorizontal:PADDING.horintal,
       paddingVertical:PADDING.vertical,
       paddingTop:45,
       height:100,
       backgroundColor:"#fff",
    },
    userImg:{
        width:50,
        height:50,
        borderRadius:50/2
    },
    userName:{
        fontSize:16,
    },

    //Style pour flateliste

    scrollableListe:{
        paddingHorizontal:PADDING.horintal,
        paddingVertical:PADDING.vertical,

    },
    scrollableItem:{
        flexDirection:'column',
        paddingHorizontal:15,
        borderRadius:10,
        paddingVertical:15,
        marginRight:15,
        backgroundColor:"white",
    },
    mainText:{
        fontWeight:"bold",
        fontSize:16,
    },
    subText:{
        marginTop:10,
        fontSize:12,
    }

})

export default dashboardStyles