import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});


function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {/* USER */}
        <AppFormField
          autoCorrect={false} 
          icon="account"
          name="name"  // every AppFormField should have a name, else error             
          placeholder="Name" 
        />

        {/* EMAIL */}
        <AppFormField
          autoCapitalize="none"  // BC I don't want the first letter capitalized
          autoCorrect={false} 
          icon="email"
          keyboardType="email-address"
          name="email"  // every AppFormField should have a name, else error             
          placeholder="Email" 
          textContentType="emailAddress" //will autofill the address from the cache. only works in iOS
        />

        {/* PASSWORD */}
        <AppFormField
          autoCapitalize="none"  // BC I don't want the first letter capitalized
          autoCorrect={false} 
          icon="lock"
          name="password"  // every AppFormField should have a name, else error             
          placeholder="Password" 
          textContentType="password" //will autofill the address from the cache. only works in iOS
        />

        {/* BUTTONS */}
        <SubmitButton title="Register" />

      </AppForm>
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

export default RegisterScreen;