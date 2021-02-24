import React from 'react';
import { View } from 'react-native' 
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Icon({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff"
}) {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      // backgroundColor: backgroundColor, if this are the same, I can just use the key backgroundColor 
      backgroundColor,
      justifyContent: "center",
      alignItems: "center",
    }} >
      <MaterialCommunityIcons 
        name={name}
        color={iconColor}
        size={size * 0.5}  // the icon should be the half of the circle
          />
    </View>
  );
}


export default Icon;
