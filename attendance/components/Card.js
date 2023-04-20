import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
 
import colors from "../config/colors";
import CustomText from "../CustomText";
 
const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.detailsContainer}>
        <CustomText style={styles.title}>{title}</CustomText>
        <CustomText>{subTitle}</CustomText>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  card: {
    backgroundColor: "yellow", //  white color from the colors.js
    borderRadius: 25, // rounded corner of the card
    marginBottom: 10, // gap for the second card
    overflow:"hidden"
  },
  image:{
    height:200,
    width:"100%",
    
  },
  detailsContainer:{
    padding:10
  },
  title:{
    backgroundColor:"skyblue",
    padding:10
  }
});
export default Card;