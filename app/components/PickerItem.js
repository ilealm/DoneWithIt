import React from "react";
/**
 * This component displays the options for a Picker
 * component in TEXT. (here is none icons)
 * When a option is selected, this section (<Modal>) gets closed
 * and the text is displayed on the Picker component 
 */
import { TouchableOpacity, StyleSheet } from "react-native";

import Text from "./Text";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;