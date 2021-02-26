import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';


function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo}
       source={require("../assets/logo-red.png")} />

      <AppTextInput
        autoCapitalize="none"  // BC I don't want the first letter capitalized
        autoCorrect={false} 
        icon="email"
        placeholder="Email" 
        onChangeText={text => setEmail(text)}
        textContentType="emailAddress" //will autofill the address from the cache. only works in iOS
        keyboardType="email-address"
      />

      <AppTextInput 
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry
        textContentType="password" //autofil from keychain, just iOS
      />

    <AppButton 
      title="Login"
      onPress={() => console.log(email, password)}
    />

    </Screen>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 10,
  },
  logo:{
    width: 80,
    height: 80,
    alignSelf:"center",  //BC in <Screen I have flex=1, the vert. axis is the default in this case
    marginTop:50,
    marginBottom:20,
  },
})

export default LoginScreen;