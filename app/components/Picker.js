/**
 * Because Picker is depracated, I'm creatrig my own component that behaves the same
 */
import React, {useState} from 'react';
import { View, 
  StyleSheet, 
  TouchableWithoutFeedback, 
  Modal, 
  Button, 
  FlatList  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Text from './Text';
import defaultStyles from '../config/styles';
import PickerItem from './PickerItem';
import Screen from './Screen';


// I can use the rest operator "..." and get the rest of the props and put inside a single object. Whatever those props are
// For instance, if this.props contained a: 1 and b: 2, then
// <Modal {...this.props} title='Modal heading' animation={false}>
// would be the same as
// <Modal a={this.props.a} b={this.props.b} title='Modal heading' animation={false}>

function AppPicker({ 
    icon, 
    items, 
    numberOfColumns= 1,  //adding a default value
    onSelectItem, 
    //Passing a component to know to render a flat list o a list with colors. 
    //By default, send PickerItem component
    PickerItemComponent = PickerItem, //by default PickerItem is just plain text wo icons.
    placeholder, 
    selectedItem, 
    width='100%',
  }) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    // I need to implement a fragment BC I'm returning more than 1 component. 
    // I can just have an <> instead of <React.Fragment>
    <> 
      {/* I need to wrap everything with touchable so I can simulate the drop */}
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)} >

        <View style={[styles.container, {width}]}>
          {/* Render this ONLY if icon is defined */}
          {icon && <MaterialCommunityIcons 
            name={icon} 
            size={20} 
            color={defaultStyles.colors.medium} 
            style={styles.icon}  /> }
      
          {/* and here I will apply whatever pros I have sent */}
          {/* displays the placeholder in midium gray and the selected item in darkgray */}
          { selectedItem 
            ?  
              (<Text style={styles.text}> { selectedItem.label } </Text> )
            :
              (<Text style={styles.placeholder}> { placeholder } </Text>)
            }  

            {/* Drop down icon \/  */}
           <MaterialCommunityIcons 
              name= "chevron-down" 
              size={20} 
              color={defaultStyles.colors.medium}   />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
            {/* Adding screen so the componet doesn't hide behind the iOS nudge */}
            <Screen>
              {/* Render the items in a FlatList */}
              <Button title="Close" onPress={() => setModalVisible(false)} />
              <FlatList 
                data={items}
                keyExtractor={item => item.value.toString()}  // is expecting a function, I CAN'T use {items.value}
                // numColumns={3} if I want this hardcode, this is the way
                numColumns={numberOfColumns}  // to have it dinamically
                // renderItems expects a func. that I'm desctucturing right away
                renderItem={({item}) => 
                  // <PickerItem 
                  <PickerItemComponent
                    // only CategoryPickerComponent needs backgroundColor and icon, so I will pass that in the
                    // item (object containing all the info). Is the item I'm rendering
                    item={item} // is a obj w a bunch of properties
                    label={item.label} 
                    onPress={() => {
                      setModalVisible(false);
                      onSelectItem(item);
                    }}
                    
                  />
                }
              />
            </Screen>
         </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row", // left to right, so I can have the icon and text in the same row. (horiz)
    // width:'100%',  // remove it BC now I'm sending the width as props
    padding: 15,
    marginVertical: 10,   // to separate multiple textInputs in the same screen
  },
  icon:{
    marginRight:10,
  },
  placeholder:{
    color: defaultStyles.colors.medium,
    flex: 1, // so the placeholder grows and takes all the place   
  },
  text:{
    flex: 1, // this is what  moves the down icon (chevron) to the right
  },
})

export default AppPicker;