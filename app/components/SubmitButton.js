/**
 * Reusable component to handle submits on using Formik
 * I can name this component without "app" because Formik doesn't have one that can create conflict.
 */
import React from "react";
import { useFormikContext } from "formik";

import AppButton from "./AppButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  //this will case the form to be submitted. I need useFormikContex
  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;