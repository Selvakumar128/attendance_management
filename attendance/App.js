// // // import React, { useState } from "react";
// // // import { StyleSheet, Text, TextInput, View, } from "react-native";
// // // import Screen from './screens/Screen'
// // // import { SelectList } from 'react-native-dropdown-select-list'
// // // import MainScreen from "./screens/MainScreen";
// // // // import { TimeDatePicker, Modes } from "react-native-time-date-picker";
// // // // import WelcomeScreen from './screens/WelcomeScreen.js'

// // // // import RegisterScreen from "./component/RegisterScreen";
// // // export default function App() {


// // //     // const [selected, setSelected] = React.useState("");
    
// // //     // const data = [
// // //     //     {key:'1', value:'RVS MCA', disabled:true},
// // //     //     {key:'2', value:'RVS MSC(CS)'},
// // //     //     {key:'3', value:'RVS BSC(MICROBIOLOGY)'},
// // //     //     {key:'4', value:'RVS BSC(CS)', disabled:true},
// // //     //     {key:'5', value:'RVS BSC(IT)'},
// // //     //     {key:'6', value:'RVS BCOM'},
// // //     //     {key:'7', value:'RVS BBA'},
// // //     //     {key:'8', value:'OTHERS'},
// // //     // ]
// // //     // const datas = [
// // //     //   {key:'1', value:'2021-23', disabled:false},
// // //     //   {key:'2', value:'2023-25'},
// // //     //   {key:'3', value:'2021-2024'},
// // //     // {key:'4', value:'2021-2024', disabled:false},
// // // //       {key:'5', value:'2021-2024'},
// // // //       {key:'6', value:'2021-2024'},
// // // //       {key:'7', value:'2021-2024'},
// // // //       {key:'8', value:'OTHERS'},
// // // //   ]
// // // //   const datab = [
// // // //     {key:'1', value:'A', disabled:false},
// // // //     {key:'2', value:'B'},
// // // //     {key:'8', value:'OTHERS'},
// // // // ]
// // // // const databa = [
// // // //   {key:'1', value:'1', disabled:false},
// // // //   {key:'2', value:'2'},
// // // //   {key:'3', value:'3'},
// // // // {key:'4', value:'4', disabled:false},
// // // //   {key:'5', value:'5'},
// // // //   {key:'6', value:'6'},
// // // //   // {key:'7', value:'2021-2024'},
// // // //   // {key:'8', value:'OTHERS'},
// // // // ]
// // // // const databas = [
// // // //   {key:'1', value:'Present', disabled:false},
// // // //   {key:'2', value:'Absent'},
// // // //   {key:'3', value:'Long Absent'},
// // // //   {key:'4', value:'ML/OD'},
// // // //   {key:'5', value:'OTHERS'},
// // // // ]
// // // // const now = moment().valueOf();


// // //   return (
// // // //  <Screen>
// // // // {/* //<Header />
// // // //    <MovingScreen />
// // // //    // <Navigation /> */}
// // // //   {/* <WelcomeScreen /> */}
// // // //   // {/* <RegisterScreen/> */}
// // // //   </Screen> 

// // // <View>
// // //   <MainScreen/>
// // // </View>
// // // );
// // // }



// // // // In App.js in a new project

// // // // import * as React from 'react';
// // // // import { View, Text } from 'react-native';
// // // // import { NavigationContainer } from '@react-navigation/native';
// // // // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // // // import MovingScreen from './Component/MovingScreen';

// // // // function HomeScreen() {
// // // //   return (
// // // //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// // // //       <Text>Home Screen</Text>
// // // //     </View>
// // // //   );
// // // // }

// // // // const Stack = createNativeStackNavigator();

// // // // function App() {
// // // //   return (
// // // //     <NavigationContainer>
// // // //       <Stack.Navigator>
// // // //         <Stack.Screen name="Home" component={HomeScreen} />
// // // //       </Stack.Navigator>
// // // //     </NavigationContainer>
// // // //   );
// // // // }

// // // // export default wApp;


import React from 'react';
import { View, StyleSheet,Button, Text, ImageBackground,Image } from 'react-native';
import HomeScreen from './HomeScreen';
import Screen from './components/Screen'
// import RadioBox from './components/RadioBox';
import AttendenceScreen from './screens/AttendenceScreen';
import LongAbsentScreen from './screens/LongAbsentScreen';
import MainScreen from './screens/MainScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AppButton from './components/AppButton';
import CustomButton from './CustomButton';
import colors from './config/colors';
import CustomText from './CustomText';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
// import { Button } from 'react-native';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import AppNavigation from './nav/AppNavigation';

function App() {
  
  return (
   <View> 
    {/* <WelcomeScreen></WelcomeScreen> */}
    {/* <HomeScreen></HomeScreen> */}
    {/* <LoginScreen></LoginScreen> */}
    <AppNavigation></AppNavigation>
   {/* <RegisterScreen></RegisterScreen> */}
        {/* <AttendenceScreen></AttendenceScreen> */}
        {/* <LongAbsentScreen></LongAbsentScreen> */}
     {/* <MainScreen></MainScreen>  */}
      {/* <RadioBox></RadioBox> */}
   
   </View>
    
    
        
      // {/* <HomeScreen></HomeScreen> */}
       );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
  }, logo: {
    width:100,
    height:100,
},
});

export default App;

