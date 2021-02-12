import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, } from 'react-native';

// import AppButton from '../components/old_AppButton'

function WelcomeScreen(props) {
  return (
   <ImageBackground 
    style={styles.background} 
    source={require('../assets/background.jpg')} >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text> Sell What You Dont Need </Text>
      </View>

      {/* <AppButton color="primary"> 
        <Text> Login </Text> 
      </AppButton>
      <AppButton color="secondary"> 
        <Text> Register </Text> 
      </AppButton> */}
      {/* <View style={styles.logginButton}></View> */}
      {/* <View style={styles.registerButton}></View> */}
   </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background : {
    // the primary axis is the vertical line, the second is the horiz
    flex:1, // so I can take the entire screen. By default the flex directon in set to column.
    justifyContent:'flex-end', // this will put the btns at the end, BC the primary axis is in. The default is flex-start 
    alignItems:'center', // centers along the secondary axis
  },
  logginButton:{
    width: '100%',
    height: 70,
    backgroundColor:'#fc5c65',
  },
  logo:{
    width:100,
    height:100,
  },
  logoContainer:{
    position:'absolute',
    top: 70,    
    alignItems:'center', // I need to put it here again BC is inside a new container, and te aligment reserts.
  },
  registerButton:{
    width: '100%',
    height: 70,
    backgroundColor:'#4ecdc4',
  },
})



export default WelcomeScreen;