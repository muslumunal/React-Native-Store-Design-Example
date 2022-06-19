import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const Search = ()=>{
  const [text,data] = React.useState("Ara..");
  return(
    <View>
      <TextInput
        style={style.seacrhBar}
        placeholder="Ara..."
        placeholderTextColor='white'
      />
    </View>
  );
};

const style = StyleSheet.create({
  seacrhBar:{
    height:40,
    margin:12,
    padding:10,
    backgroundColor:'#94B49F',
    borderRadius:8
  },
});
export default Search;
