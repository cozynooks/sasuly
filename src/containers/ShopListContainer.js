import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import Shop from '../components/Shop';

const ShopList = ({ shops }) => (
  <View>
    { shops.map(shop =>
      <Shop url={shop.url} name={shop.name} />
    )}
  </View>
);

const mapStateToProps = state => ({
  shops: state.shops,
});

const ShopListContainer = connect(mapStateToProps)(ShopList);

export default ShopListContainer;
