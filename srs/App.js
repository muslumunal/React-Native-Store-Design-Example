import React from "react";
import { Node } from 'react';
import { Text, View, SafeAreaView, TextInput, StyleSheet, FlatList } from "react-native";
import Search from "./components/Search/Search";
import Product from "./components/Product";
import product_data from './product.json'
function App(){
  const renderProducts = ({item}) => <Product products={item}/>
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.siteTitle}>Patika Store</Text>
      <Search/>
      <FlatList data={product_data} renderItem={renderProducts} numColumns={2} horizontal={false}

      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,


  },
  siteTitle:{
    fontSize:40,
    color:'white',
    fontWeight:'bold',
    marginTop:15,
    marginLeft:15,
    marginRight:15,
    textAlign:'center',
    backgroundColor:'#DF7861',
    borderRadius:10

  }
});

export default App;
