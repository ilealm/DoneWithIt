import React from 'react';
import { View, 
  Text,
  StyleSheet,
  ImageBackground,
  Image,
 } from 'react-native';

// const image = { uri: "./assets/background.jpg" };
const image = { uri: "https://reactjs.org/logo-og.png" };
const logo = { uri: "https://image-placeholder.com/images/actual-size/75x75.png"}

const Welcome = () => (
    <View style= {{
      // flex:1,
      // flexDirection: 'row',
    }}>
      <View style = { styles.container }>
        <ImageBackground source={image} style={styles.image}>
          <Image source= {logo} style={ styles.logo} ></Image>
          <Text style={ styles.text } >Sell What You Don't Need </Text>
        </ImageBackground>
   
      </View>

      <View style={{
          backgroundColor: '#fc5c65',
          height: '10%',
      }} >
        {/* <Text>dsfsd</Text> */}
      </View>

      <View style={{
          backgroundColor: '#4ECDC4',
          height: '10%',
      }} >
      </View>

    </View>

  );

const styles = StyleSheet.create({
  container : {
    // flex: 1,
    // flexDirection: "column",
    height:'80%',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 15,
  },  
  logo: {
    width: '20%',
    height: '20%',
    // flex:1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  }
})


export default Welcome;