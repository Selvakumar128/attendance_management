import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
 
import { MaterialCommunityIcons } from "@expo/vector-icons";

 
const ListItemDeleteAction = ({onPress}) => {
  return (
    <View style={styles.deleteContainer}>
      <MaterialCommunityIcons onPress={onPress} name="trash-can" size={20} color={colors.white} />
    </View>
  );
};
const styles = StyleSheet.create({
  deleteContainer: {
    backgroundColor: colors.danger,
    width: 70,
    alignItems:"center",
    justifyContent:"center"
  },
});
export default ListItemDeleteAction;
