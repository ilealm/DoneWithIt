/**
 * Component to use with Formik forms, and RETURNS a formik component.
 * Formik has a component called Form, this is the reason this component is called AppForm.
 */

import React from 'react';
import { Formik } from 'formik';
 
function AppForm({ initialValues, onSubmit, validationSchema, children }) {
   return (
      <Formik
        // the funcion takes an obj that represents the values on the form
        initialValues={ initialValues }
        onSubmit={ onSubmit }
        validationSchema= {validationSchema}  // 
      >
      {() => (
        <>
          { children }
        </>
      )}  
      </Formik>
   );
 }
 
 export default AppForm;