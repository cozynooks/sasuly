import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, StatusBar } from 'react-native';


import ShopList from '../components/ShopList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8D8D8',
  },
});

const App = ({ sasuly }) => (
  <View style={styles.container}>
    <StatusBar style={{ height: 40 }} />
    <ShopList {...sasuly} />
  </View>
);

const mapStateToProps = state => ({
  sasuly: state.sasuly,
});

export default connect(mapStateToProps)(App);
