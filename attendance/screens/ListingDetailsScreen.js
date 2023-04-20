import React from "react";
import { View, Image, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
 
import colors from "../config/colors";
import CustomText from "../CustomText";
 
const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/download.jpeg")} />
      <View style={styles.detailsContainer}>
        <CustomText style={styles.title}>Chairs for Sale</CustomText>
        <CustomText style={styles.price}>$1000</CustomText>
      </View>
      <ListItem
        image={require("../assets/download.jpeg")
      }
      title="rvscas"
      subTitle={566}
      ></ListItem>
    </View>
  );
};
 
const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "900",
    color: colors.secondary,
    marginVertical: 10,
  },
});
export default ListingDetailsScreen;