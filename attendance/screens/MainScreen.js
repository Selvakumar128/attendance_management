import React from 'react';
import { StyleSheet, Text, TextInput, View, } from "react-native";
// import Screen from '.x/screens/Screen'
import { SelectList } from 'react-native-dropdown-select-list'

function MainScreen(props) {
    const [selected, setSelected] = React.useState("");
    
    const data = [
        {key:'1', value:'RVS MCA', disabled:false},
        {key:'2', value:'RVS MSC(CS)'},
        {key:'3', value:'RVS BSC(MICROBIOLOGY)'},
        {key:'4', value:'RVS BSC(CS)', disabled:false},
        {key:'5', value:'RVS BSC(IT)'},
        {key:'6', value:'RVS BCOM'},
        {key:'7', value:'RVS BBA'},
        {key:'8', value:'OTHERS'},
    ]
    const datas = [
      {key:'1', value:'2021-23', disabled:false},
      {key:'2', value:'2023-25'},
      {key:'3', value:'2021-2024'},
    {key:'4', value:'2021-2024', disabled:false},
      {key:'5', value:'2021-2024'},
      {key:'6', value:'2021-2024'},
      {key:'7', value:'2021-2024'},
      {key:'8', value:'OTHERS'},
  ]
  const datab = [
    {key:'1', value:'A', disabled:false},
    {key:'2', value:'B'},
    {key:'8', value:'OTHERS'},
]
const databa = [
  {key:'1', value:'1', disabled:false},
  {key:'2', value:'2'},
  {key:'3', value:'3'},
{key:'4', value:'4', disabled:false},
  {key:'5', value:'5'},
  {key:'6', value:'6'},
  // {key:'7', value:'2021-2024'},
  // {key:'8', value:'OTHERS'},
]
const databas = [
  // {key:'1', value:'Present', disabled:false},
  // {key:'2', value:'Absent'},
  // {key:'3', value:'Long Absent'},
  // {key:'4', value:'ML/OD'},
  // {key:'5', value:'OTHERS'},

]
// const now = moment().valueOf();


  return (


<View>
  <Text></Text>
  <Text></Text>
<Text style={styles.Text}>MAIN SCREEN</Text>
  <Text>Course:</Text>
 <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
       
    />
     <Text>Batch:</Text>
 <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={datas} 
        save="value"
    />
       <Text>Section:</Text>
 <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={datab} 
        save="value"
    />
    <Text>Date:</Text>
    <TextInput placeholder="date"></TextInput>
    <Text>Day Order:</Text>
 <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={databa} 
        save="value"
    />
    </View>)
}

const styles = StyleSheet.create({
  container: {},
  Text:{
    color:'orange',
    fontSize:20,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:"center",
    paddingTop:30,
  }
});

export default MainScreen;