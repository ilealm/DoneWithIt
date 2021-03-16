import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';  // so I can have the component starting after the nudge.
import { useNetInfo } from '@react-native-community/netinfo';


import colors from '../config/colors';
import Text from './Text';

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  // console.log(netInfo)

  // I only want to display something where is NOT connection
  // I can't do here !netInfo.isInternetReachable BC I just don't want a falsy value, I need to be false
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          No Internet Connection
        </Text>
      </View>
    );
  
    // NOTE when the internet connection returns this message should dissaper. Works on real divices but not simulator.
    // I can check this using airplane mode 
  return null;
}


const styles = StyleSheet.create({
  container:{
    alignItems:'center',     // this two has to be together to center text
    justifyContent:'center',  // this two has to be together to center text
    backgroundColor: colors.primary,
    height:50,
    position: 'absolute',  // so appears always on the top
    top:  Constants.statusBarHeight,
    width:'100%',
    zIndex: 1, // so in App it appears at the front. If I don't use it, then this component willl appears behind the navigation 
  },
  text:{
    color: colors.white,
  }, 
})

export default OfflineNotice;