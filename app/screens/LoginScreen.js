import React, { useState, useContext } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
// import jwtDecode from 'jwt-decode';

import authApi from '../api/auth';
import { Form, FormField, SubmitButton, ErrorMessage } from "../components/forms";
import Screen from "../components/Screen";
// import AuthContext from "../auth/context";
// import authStorage from "../auth/storage";


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  // const authContext = useContext(AuthContext);
  // replace with:
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({email, password}) => {
    const result = await authApi.login(email, password)

    // if there is an error, display message and return WO doing anything else
    if (!result.ok) return setLoginFailed(true);
    
    setLoginFailed(false);

    // going to move this logic to useAuth:
      // // decode and log the user object and store it to make it available to the complete app
      // const user = jwtDecode(result.data)
      // // console.log(user);
      // // here app.js will re-render BC when I change a context, all its children gets re-render, and BC there is
      // // now a user, I got send to listings (AppNavigator)
      // authContext.setUser(user);
      // // now store the app token. I rename storage to authStorage
      // authStorage.storeToken(result.data);
    // replace with:
    logIn(result.data);
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Form
        initialValues={{ email: "", password: "" }}
        // onSubmit={(values) => console.log(values)}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."  // I could put the error from the object's response
          visible={loginFailed}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;