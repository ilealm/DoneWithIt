import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';


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

      <Formik
        initialValues={ { email:'', password:'' } }  // set to an obj    // onSubmit takes a func to call when the form has been submitted. 
        // the funcion takes an obj that represents the values on the form
        onSubmit={(values) => console.log(values)}
        validationSchema= {validationSchema}  // 
      >

      {/* 
        - here I have {} BC I need to pass a function. {() => } , this is why I need to use {}
        - This fun. have an argument (arg) =>,  
        - ({ handleChange , hanldeSubmit  }) => that I can destructor to just pick some properties (they are a bunch.)
        This fun should return an JS expresion, is there are multiple lines add ()
        errors are all the errors on the form
      */}
       {/* because I added SubmitButton now I don't need all this prosp in the objs */}
        {/* { ( {handleChange , handleSubmit, errors, setFieldTouched, touched } ) =>  (  // I'm using () BC I'm going to use multiple lines */}
        { ( ) =>  (  // I'm using () BC I'm going to use multiple lines
          <> 
            <AppFormField
              autoCapitalize="none"  // BC I don't want the first letter capitalized
              autoCorrect={false} 
              icon="email"
              keyboardType="email-address"
              name="email"  // every AppFormField should have a name, else error             
              placeholder="Email" 
              textContentType="emailAddress" //will autofill the address from the cache. only works in iOS
            />

            <AppFormField 
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"  // every AppFormField should have a name, else error
              placeholder="Password"
              secureTextEntry
              textContentType="password" //autofil from keychain, just iOS
            />

            <SubmitButton title='Login' />
          </>
        ) }
      </Formik>
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