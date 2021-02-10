import React from 'react';
import {
  View, SafeAreaView,
  Text,
  StyleSheet,
  Image,
} 
from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };

const ViewImageScreen = () => (
  <SafeAreaView style= {{backgroundColor: "black"}}>
    <View style={ styles.containter}>
      {/* <Text>view image screen </Text> */}
      <View style={ styles.close }>
        <Text>close</Text>
      </View>
      <View style={ styles.delete }>
        <Text>del</Text>
      </View>
    </View>

    <View style = {styles.image }>
    <Image source= {image} style={ styles.logo} ></Image>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    resizeMode: "contain",
    flexDirection:"row",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  close: {
    width: 50,
    height: 50,
    backgroundColor: '#fc5c65', 
    left:30,
  },
  delete: {
    width: 50,
    height: 50,
    backgroundColor: '#4ECDC4',
    right: 30,
  },
  image: {
    height: "100%",
    width: "80%",

  }
});

export default ViewImageScreen;

