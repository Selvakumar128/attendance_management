import React from "react";
import { Image, StyleSheet, View } from "react-native";
 
const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.closeButton} />
        <View style={styles.deleteButton} />

      <Image
        style={styles.image}
        source={require("../assets/icon.png")}
        resizeMode="contain"
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: { backgroundColor: "black",flex:1 },
  image: {
    height: "100%",
    width: "100%",
  },
  closeButton: {
    height: 50,
    width: 50,
    backgroundColor: "deeppink",
    position:"absolute",
    top:50,
    left:50
  },
  deleteButton: {
    height: 50,
    width: 50,
    backgroundColor: "deeppink",
    position:"absolute",
    top:50,
    right:50
  },
});
export default ViewImageScreen;
