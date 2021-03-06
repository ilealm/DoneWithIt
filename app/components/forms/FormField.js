/**
 * Reusable form component.
* It contains an <AppTexInput> and a <ErrorMessage>
 */
import React from 'react';
import { useFormikContext } from 'formik'; // this will pass down: {handleChange , handleSubmit, errors, setFieldTouched, touched } 
 
import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';


// with otherProps I can have autoCapitalize, autoCorrect, icon, keyboardType, onBlur, placeholder, textContentType
function AppFormField({ name, width, ...otherProps }) {
  // const {setFieldTouched, handleChange, errors, touched}  = useFormikContext(); // returns an obj that I can destructure and pick the props I need
  // in order that forms like ListingEditScreen reset values on submiting, I need to add setFieldsValue and values object, I don't need handleChange anymore
  const {setFieldTouched,  
        setFieldValue, // needed to reset values on submit 
        errors, 
        touched, 
        values   // needed to reset values on submit
      }  = useFormikContext(); // returns an obj that I can destructure and pick the props I need

   return (
     <>
      <TextInput
          // I want to display the error only when the user is done typing, so on OnBlur I need t
          // onBlur = set to fun {() => }
          onBlur={() => setFieldTouched(name) }  // will marrk this field as touched on blur              
          // onChangeText={handleChange(name)}  // is the same I declared on initialValues, but this approach doesn't handle reset, so changed to next lime
          onChangeText={(text) => setFieldValue(name, text)}  // is the same I declared on initialValues
          value= {values[name]} // also added to handle reset
          width = {width}
          {...otherProps}
        />
        {/* I want to render this error message ONLY if the field has been touched (onBu=lur) AND has an error */}
        {/* <ErrorMessage error={errors.email} visible={touched.email} /> */}
        <ErrorMessage error={errors[name]} visible={touched[name]} />
     </>
   );
 }
 
 export default AppFormField;