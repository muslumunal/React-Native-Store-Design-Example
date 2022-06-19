import React from "react";
import { Image, Text, View, SafeAreaView } from "react-native";
import styles from './Product.style'

const Product = ({products}) =>{
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.imageBorder}>
        <Image style={styles.image} source={{uri: products.imgURL}}/>
      </View>
      <View>
        <Text style={styles.name}>{products.title}</Text>
        <Text style={styles.inStock}>{products.inStock == true ? '': 'Stokta Yok'}</Text>
        <Text style={styles.price}>{products.price}</Text>
      </View>

    </SafeAreaView>
    )
}

export default Product;
