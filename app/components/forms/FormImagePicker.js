import React from 'react';
import { useFormikContext } from 'formik';  //gives me access to the values context

import ErrorMessage from './ErrorMessage';
import ImageInputList from '../ImageInputList';


// here is receiving "images" as name of the form component, from parent ListingEditScreen
function FormImagePicker({ name }) {
  // values has all the values for our form
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imagesUris = values[name]

  // function that add a new uri to the array of imagesUris
  const handleAdd = uri => {
    // I need to tell formik to update the value of this field, using setFieldValue
    setFieldValue(name, [...imagesUris, uri]);
  }
  

  const handleRemove = uri => {
    setFieldValue(name, imagesUris.filter(
      imageUri => imageUri !== uri ));
  }


  return (
    <>
    {/* Formik is the one that is going to mantain local state */}
      <ImageInputList 
        imageUris={imagesUris} 
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}



export default FormImagePicker;