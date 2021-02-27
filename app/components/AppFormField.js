/**
 * Reusable form component.
* It contains an <AppTexInput> and a <ErrorMessage>
 */

 import React from 'react';
 import { useFormikContext } from 'formik'; // this will pass down: {handleChange , handleSubmit, errors, setFieldTouched, touched } 
 
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';


// with otherProps I can have autoCapitalize, autoCorrect, icon, keyboardType, onBlur, placeholder, textContentType
function AppFormField({ name, ...otherProps }) {
  const {setFieldTouched, handleChange, errors, touched}  = useFormikContext(); // returns an obj that I can destructure and pick the props I need

   return (
     <>
      <AppTextInput
          // I want to display the error only when the user is done typing, so on OnBlur I need t
          // onBlur = set to fun {() => }
          onBlur={() => setFieldTouched(name) }  // will marrk this field as touched on blur              
          onChangeText={handleChange(name)}  // is the same I declared on initialValues
          {...otherProps}
        />
        {/* I want to render this error message ONLY if the field has been touched (onBu=lur) AND has an error */}
        {/* <ErrorMessage error={errors.email} visible={touched.email} /> */}
        <ErrorMessage error={errors[name]} visible={touched[name]} />
     </>
   );
 }
 
 export default AppFormField;