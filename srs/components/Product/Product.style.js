import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
  container:{
    flex:1,
    margin:10,
    padding:10,
    backgroundColor:'#FCF8E8',
    borderRadius:10,

  },
  image:{
    height: Dimensions.get('window').height / 4,
    width: '100%',

    resizeMode:'contain'
  },
  imageBorder:{
    backgroundColor:'white',
    padding:5,
    borderRadius:10
  },
  name:{
    margin:10,
    fontSize:20,
    fontWeight:'bold'
  },
  price:{
    margin:10,
    fontSize:18
  },
  inStock:{
    color:'red',
    margin:10,
    fontWeight:'bold',
    fontSize:18,
    textTransform:'uppercase'
  }
})
