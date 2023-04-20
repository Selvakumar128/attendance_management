import React from 'react';
import { View, StyleSheet,Button, Text,TextInput } from 'react-native';

import { SelectList } from 'react-native-dropdown-select-list'


function LongAbsentScreen() {
  const [selected, setSelected] = React.useState("");
  const datab = [
    {key:'1', value:'Long Absent', disabled:false},
    {key:'2', value:'Discontinused'},
    {key:'3', value:'Ml/OD'},
    {key:'4', value:'others'},]
  return (
    <View style={styles.container}>
      
      <Text style={styles.Text}>LONG ABSENT SCREEN</Text>
      <Text>Reg.No</Text>
    <TextInput placeholder="Reg.no"></TextInput>
    <Text>Name:</Text>
    <TextInput placeholder="Ener The Name"></TextInput>
    <Text>Course</Text>
    <TextInput placeholder="Enter the Course"></TextInput>
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={datab} 
        save="value"
    />
     <Text>Date</Text>
    <TextInput placeholder="Enter the Date"></TextInput>
    <Text>Year</Text>
    <TextInput placeholder="Enter the Year"></TextInput>
    <Button
//   onPress={onPressLearnMore}
  title="SUBMIT"
  color="#841584"

/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
  },Text:{
    color:'orange',
    fontSize:20,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:"center",
    paddingTop:30,
  }
});

export default LongAbsentScreen;

