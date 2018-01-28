import React from 'react';
import { StyleSheet, View } from 'react-native';
import Shop from './Shop';

const styles = StyleSheet.create({
  shoplist: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

const ShopList = props => (
  <View style={styles.shoplist} >
    { props.shops.map(shop => <Shop url={shop.url} name={shop.name} image={shop.inStoreImage} /> )}
  </View>
);

export default ShopList;
