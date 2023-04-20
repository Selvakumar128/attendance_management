import React from "react";
import { View, ImageBackground, StyleSheet,Image } from "react-native";
import AppButton from "../components/AppButton";
import CustomButton from "../CustomButton";
import colors from '../config/colors';



const WelcomeScreen = () => {
  // const [email,setEmail]=useState('')
  //   const [password,setPassword]=useState('')
  //   const validate=Yup.object().shape({
  //       email:Yup.string().required().email().label('email'),
  //       password:Yup.string().required().min(5).label('password')
  //   })
  return (
 
  <ImageBackground source={{
    uri: 
'https://tinyurl.com/3j3db4er',
  }}
  resizeMode="stretch"
  style={styles.img}>

  </ImageBackground>

  )
};
 
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent:"flex-end",
    alignItems:"center"
  },
  loginButton: {
    backgroundColor: "dodgerblue",
    width: "100%",
    height: 70,
    marginVertical:10
  },
  registerButton: {
    backgroundColor: "deeppink",
    width: "100%",
    height: 70,
   
  },
  logo: {
    width:100,
    height:100,
},
logoContainer: {
    position: "absolute",
    top: 50,
    alignItems:"center"
  },
});
export default WelcomeScreen;