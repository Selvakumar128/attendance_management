import React from 'react';
import { Button,StyleSheet } from 'react-native';

const CustomButton = ({title,color,onPress}) => {
    return (
        <Button title={title} color={color} onPress={onPress}></Button>
    );
}

const styles = StyleSheet.create({
    
})
export default CustomButton;