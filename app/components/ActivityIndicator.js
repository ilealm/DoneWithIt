import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    // to be able to implement a overlay, I need to add wrap the LottieView with a <View />
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute', // the view is pushing te form back, so I need this
    backgroundColor:'white',
    height: '100%',
    opacity: 0.8, // so I can see the screen on the back
    width:'100%',
    zIndex: 1, // so it appears at top of the screen, and the component that is using it (eg Registred) appers in the back and the controls can'b be used
  }
  
})


export default ActivityIndicator;