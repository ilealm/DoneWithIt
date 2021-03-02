import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";


// IF I WANT TO USE THIS APPROACH, I HAVE TO DO THE SAME IN ALL PAGES
// import {
//   AppForm as Form,
//   AppFormField as FormField,
//   AppFormPicker as Picker,
//   SubmitButton,
// } from "../components/forms";


// for some reason, if I add AppFormPicker in this way, I have errors loading
// import { AppForm, AppFormField,  SubmitButton, AppFormPicker } from "../components/forms";
// so I need to load in this way
import { AppForm, AppFormField,  SubmitButton } from "../components/forms";
import AppFormPicker from '../components/forms/AppFormPicker';

import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",  // even price is a #, inside the Appform is a string
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
      <AppFormField maxLength={255} name="title" placeholder="Title" />
       <AppFormField
          keyboardType="numeric"
          maxLength={8}  //10000.00 => 8 chrs
          name="price"
          placeholder="Price"
          width= {120}
        />
        <AppFormPicker 
          items={categories} 
          name="category" 
          placeholder="Category"
          width= '50%'
        />

        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}  // only works for android
          placeholder="Description"
        /> 
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;