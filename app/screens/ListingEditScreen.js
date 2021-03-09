import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";


// IF I WANT TO USE THIS APPROACH, I HAVE TO DO THE SAME IN ALL PAGES
// import {
//   AppForm as Form,
//   FormField as FormField,
//   AppFormPicker as Picker,
//   SubmitButton,
// } from "../components/forms";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  // images: Yup.array().min(1).label("Images") // Images field is required. BUT I can have a more friendly array:
  images: Yup.array().min(1,"Please select at least one image."),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",  // even price is a #, inside the Appform is a string
          description: "",
          category: null,
          images:[], 
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
      <FormImagePicker name="images"/>
      <FormField maxLength={255} name="title" placeholder="Title" />
       <FormField
          keyboardType="numeric"
          maxLength={8}  //10000.00 => 8 chrs
          name="price"
          placeholder="Price"
          width= {120}
        />
        <Picker 
          items={categories} 
          name="category" 
          numberOfColumns = {3}
          PickerItemComponent = {CategoryPickerItem}
          placeholder="Category"
          width= '50%'
        />

        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}  // only works for android
          placeholder="Description"
        /> 
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;