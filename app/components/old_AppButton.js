import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

import colors from '../config/colors';

function AppButton({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent: "center",
    alignItems: "center", 
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
    // backgroundColor: colors.{this.props.color},
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    // borderBottomWidth: 10,
  },
  text:{
    color: colors.white,
    textTransform: "uppercase",
    fontWeight:"bold",
    // fontVariant:""
  },
})

export default AppButton;
