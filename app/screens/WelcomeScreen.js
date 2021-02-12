import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, } from 'react-native';
import AppButton from '../components/AppButton';

// import AppButton from '../components/old_AppButton'

function WelcomeScreen(props) {
  return (
   <ImageBackground 
    blurRadius={10}
    style={styles.background} 
    source={require('../assets/background.jpg')} >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}> Sell What You Dont Need </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton title='Login' />
        <AppButton title='Register' color='secondary' />        
      </View>

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
  buttonsContainer:{
    padding: 20,
    width: '100%',  // this one is the one in charge to make longer the buttons

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
  tagline:{
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
})



export default WelcomeScreen;