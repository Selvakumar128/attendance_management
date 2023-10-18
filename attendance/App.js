


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

