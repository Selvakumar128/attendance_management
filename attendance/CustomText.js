import React from 'react';
import { StyleSheet, Text,Platform } from 'react-native';
import colors from './config/colors';

const CustomText = ({children,style}) => {
    return (
       <Text style={[styles.text,style]}>{children} </Text> 
    );
}

export default CustomText;


  
const styles = StyleSheet.create({
    text:{
        //fontFamily:
        color:"orangr"
        
    }

})