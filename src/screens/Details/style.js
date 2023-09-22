import { StyleSheet } from "react-native";


const styles= StyleSheet.create({

container: {
    flex:1,
    backgroundColor: '#141a29',
    
    },

titulo:{
        color: '#fff',
        fontSize:26,
        fontWeight: "bold",
        alignSelf: "center",
        paddingTop:8,
        
    },

    textNota:{
        fontSize:20,
        color:'#fff',
        alignItems:"left",
        fontWeight: "bold",

    },

    images:{
        width: 100,
        height:200,
        borderRadius: 8,
        alignSelf: "center" 
    },

    sinopse:{
        marginTop: 30,
        fontSize: 24,
        fontWeight: "bold",
        color: '#fff',
        alignSelf: "center"
    },

    sinopseText:{
        fontSize: 18,
        color: '#fff',
        fontFamily: "arial",
        margin : 2,

    }

})

export default styles