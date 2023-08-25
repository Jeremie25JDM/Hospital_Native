import {  StyleSheet } from "react-native";
import { COLORS, PADDING } from "../../outils/Constante";

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
    symptomeItem:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:15,
        width:180,
        borderRadius:10,
        paddingVertical:15,
        marginRight:15,
        backgroundColor:"white",
    },
    mainText:{
        fontWeight:"bold",
        fontSize:16,
    },
    SympomeTxt:{
        paddingHorizontal:15,
        paddingVertical:0,
        fontWeight:"bold",
        fontSize:16,
    },
    imageSymptome:{
        width:50,
        height:50
    },

    imageStyle:{
        width:100,
        height:100
    },
    subText:{
        marginTop:10,
        fontSize:12,
    },
// Style pour les docteurs 
 title_space :{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:PADDING.horintal,
    paddingVertical:PADDING.vertical,
 },
 text_bold:{
    fontWeight:"bold",
    fontSize:16,
 },
 Link:{
    color:COLORS.main,
    fontSize:16,
 },

 docteur_container:{
    paddingTop:15,
    paddingHorizontal:PADDING.horintal,
    paddingVertical:PADDING.vertical,
 },
 doctorCard:{
    flex:1,
    flexDirection:"row",
    backgroundColor:"white",
    elevation:5,
    padding:10,
    paddingHorizontal:PADDING.horintal,
    paddingVertical:PADDING.vertical,
    marginBottom:20,
    borderRadius:5,
 },
 doctorImg:{
    height:80,
    width:80,
    marginRight:15,
    borderRadius:80/2,
 },
 doctorinfos:{
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    width:150,
    gap:15,
 },
 doctorfullname:{
    fontWeight:"bold"
 },
 doctorspeciality:{
    backgroundColor:COLORS.main,
    paddingHorizontal:PADDING.horintal,
    padding:5,
    borderRadius:15,
    color:"white",
    fontSize:14,
    textAlign:"center"
 }



})

export default dashboardStyles