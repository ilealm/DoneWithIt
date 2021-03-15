import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import * as Progress from 'react-native-progress';

import Text from '../components/Text';
import colors from '../config/colors';

function UploadScreen({progress=0, visible=false}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
       {/* <Text>  {progress*100}%   </Text> */}
       <Progress.Bar progress={progress} color={colors.primary} width={200} />
      </View>
    </Modal>
  );
}


const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    flex: 1, // take all the screen
    justifyContent:'center',
  },
})

export default UploadScreen;