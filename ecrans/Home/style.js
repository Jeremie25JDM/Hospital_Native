import {  StyleSheet } from "react-native";
import { PADDING } from "../../outils/Constante";

const dashboardStyles=StyleSheet.create({
    header:{
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center",
       paddingHorizontal:PADDING.horintal,
       paddingVertical:PADDING.vertical,
       backgroundColor:"#fff",
    },
    userImg:{
        width:50,
        height:50,
        borderRadius:50/2
    },
    userName:{
        fontSize:16,

    }
})

export default dashboardStyles