/**
 * Import all the components in this folder
 */

// Instead of 
// import AppForm from './AppForm';
// and then export { AppForm, AppFormField };
// I can just have it both steps in one line
// export { default as AppForm } from './AppForm';

export { default as Form } from "./Form";
export { default as FormField } from "./FormField";
export { default as FormPicker } from "./FormPicker";
export { default as ErrorMessage } from "./ErrorMessage";
export { default as SubmitButton } from "./SubmitButton";
