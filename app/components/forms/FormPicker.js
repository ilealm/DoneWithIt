import React from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ 
  items, 
  name, 
  numberOfColumns, 
  PickerItemComponent, 
  placeholder, 
  width,
 }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <Picker
        items={items}
        numberOfColumns = {numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}  // name is the name of the field
        PickerItemComponent = {PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}  // values is a key/value
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;