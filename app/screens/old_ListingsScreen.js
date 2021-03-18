import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
// I can do this BS I have a index.js
import { Form, FormField, SubmitButton } from '../components/forms';


// VALIDATION SQUEMA FOR THE FORM
// I'm declaring it there BC I don't want to obj to be redefined everytime the fun is re-render
// validate the email as required string, format email and on error display the label
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});


function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo}
       source={require("../assets/logo-red.png")} />

      <Form
        // the funcion takes an obj that represents the values on the form
        initialValues={ { email:'', password:'' } }   // if I don't assing a initial value, the validation schema won't work.
        onSubmit={(values) => console.log(values)}
        validationSchema= {validationSchema}   
      >
        <FormField
              autoCapitalize="none"  // BC I don't want the first letter capitalized
              autoCorrect={false} 
              icon="email"
              keyboardType="email-address"
              name="email"  // every FormField should have a name, else error             
              placeholder="Email" 
              textContentType="emailAddress" //will autofill the address from the cache. only works in iOS
        />
        <FormField 
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"  // every FormField should have a name, else error
          placeholder="Password"
          secureTextEntry
          textContentType="password" //autofil from keychain, just iOS
        />

        <SubmitButton title='Login' />
      </Form>
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