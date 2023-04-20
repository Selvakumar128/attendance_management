import React from "react";
import { StyleSheet, Image, View, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import CustomText from "../CustomText";
import colors from "../config/colors";
 
const ListItem = ({ title, subTitle, image, onPress,renderLeftActions }) => {
  return (
    <GestureHandlerRootView>

  <Swipeable onSwipeableLeftOpen={() => console.log('opening')} renderLeftActions={renderLeftActions}>

    <TouchableHighlight 
    underlayColor="red"
    onPress={onPress}
    >

    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <CustomText style={styles.title}>{title}</CustomText>
        <CustomText style={styles.subTitle}>{subTitle}</CustomText>
      </View>
    </View>
    </TouchableHighlight>
  </Swipeable>
</GestureHandlerRootView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    //borderBottomWidth:3,
    marginVertical:5
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight:10,
  },
  detailsContainer:{
    justifyContent:"center"
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.secondary,
  },
});
export default ListItem;