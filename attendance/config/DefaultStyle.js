import React from 'react';
import { Platform } from 'react-native';
import color from './colors'

export default {
    text:{
        color:color.primary,
        fontSize:10,
        fontFamily:Platform.OS==="android"?"Robot":"Avanir",

    },
    color:color,
}