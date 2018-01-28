import React from 'react';
import { Dimensions, StyleSheet, View, Image, Text } from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  shop: {
    marginTop: 20,
    width: width * 0.9,
    height: height * 0.3,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  shop__text: {
  },
});

const Shop = ({ url, name, image }) => (
  <View style={styles.shop} >
    <Image
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 10,
      }}
      source={{ uri: image }}
    />
    <Text
      style={{
        fontFamily: 'Hiragino Sans',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 30,
        padding: 40,
      }}
    >
      {name}
    </Text>
  </View>
);

export default Shop;
