/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainerTop}>
        <View style={styles.boxTop}></View>
        <View style={styles.boxTop}></View>
      </View>
      <View style={styles.boxContainerBottom}>
        <View style={styles.boxBottom}></View>
        <View style={styles.boxBottom}></View>
        <View style={styles.boxBottom}></View>
        <View style={styles.boxBottom}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  boxContainerTop: {
    backgroundColor: '#A1c99A',
    flex: 0.49,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-around',
  },
  boxContainerBottom: {
    backgroundColor: '#c8c8fA',
    flex: 0.49,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  boxTop: {
    backgroundColor: '#ffffc2',
    height: 100,
    borderRadius: 20,
    marginHorizontal: 30,
  },
  boxBottom: {
    width: 130,
    height: 130,
    backgroundColor: '#4f82c0',
    margin: 20,
    borderRadius: 20,
  },
});

export default App;
