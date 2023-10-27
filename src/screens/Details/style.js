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

notaContainer: {
  flexDirection: 'row',
  alignItems: 'baseline', 
  marginTop: 10,
  
},
  
  textNota: {
    fontSize: 20,
    color: '#fff',
    flex: 1, 
    textAlign: 'right', 
    paddingRight: 10,
    
  },
  
  starsContainer: {
    flexDirection: 'row', 
    alignItems: 'baseline', 
    marginLeft: 10,
  },
  
images:{
    resizeMode: 'stretch',
    width: '100%',
    height:'60%',
    borderRadius: 100,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    alignSelf: "center", 
    marginBottom: 25


},

sinopse:{
    marginTop: 30,
    fontSize: 24,
    fontWeight: "bold",
    color: '#fff',
    alignSelf: "Left",
    marginLeft:12,
    paddingBottom: 20
},

sinopseText:{
  fontSize: 18,
  color: '#fff',
  fontFamily: "Nanun Gothic",
  paddingLeft: 10,
  backgroundColor: "#141a29"

},



})

export default styles