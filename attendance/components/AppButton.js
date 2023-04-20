import React from "react";
import { View, Text, StyleSheet } from "react-native";
 
import colors from "../config/colors";
const AppButton = ({title,color="primary"}) => {
  return (
    <View style={[styles.button, {backgroundColor:colors[color]}]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    borderRadius: 25,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:10
  },
   text: {
    color: colors.white,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
});
export default AppButton;
