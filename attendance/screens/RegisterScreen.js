// // import React from 'react';
// // import {View  } from 'react-native';
// // import AppFormField from '../components/AppFormField';
// // import * as Yup from 'yup'
// // import AppForm from '../components/AppForm';
// // import AppSubmitButton from '../components/AppSubmitButton';
// // import AppFormPicker from '../components/AppFormPicker';

// // const RegisterScreen = () => {
// //     const ValidateSchema=Yup.object().shape({
// //         name:Yup.string().required().label('Name'),
// //         email:Yup.string().required().max(20).email().label('Email'),
// //         password:Yup.string().required().min(5).label('Password'),
// //         category:Yup.object().required().nullable().label('Category')
// //     })

// //     const categories = [
// //         { label: "Furniture", value: 1 },
// //         { label: "Clothing", value: 2 },
// //         { label: "Camera", value: 3 },
// //       ];
// //     return (
// //         <AppForm
// //         initialValues={{
// //             name:"",
// //             email:"",
// //             password:"",
// //             category:""
// //         }}
// //         onSubmit={(values)=>console.log(values)}
// //         ValidationSchema={ValidateSchema}
// //         >
// // <AppFormField maxlength={255} name='name' placeholder='Name' icon={"user"}  ></AppFormField>
// // <AppFormField maxlength={255} name='email' placeholder='Email' icon={"envelope"} ></AppFormField>
// // <AppFormField maxlength={255} name='password' placeholder='Pasword'  icon={"lock"}></AppFormField>
// // <AppFormPicker maxlength={255} name='category' placeholder='Category' items={categories} ></AppFormPicker>


// // <AppSubmitButton
// // title={"Register"}
// // />
// // </AppForm>
// //     );
// // }

// // export default RegisterScreen;

// // import React from "react";
// // import { SafeAreaView, StyleSheet, TextInput } from "react-native";
// // function RegisterScreen(props) {
// //     // const UselessTextInput = () => {
// //     //     const [text, onChangeText] = React.useState("Useless Text");
// //     //     const [number, onChangeNumber] = React.useState(null);
// //     // }
// //   return (
// //     <View style={styles.container}>
// //        <SafeAreaView>
// //       <TextInput
// //         style={styles.input}
// //         onChangeText={onChangeText}
// //         value={text}
// //       />
// //       <TextInput
// //         style={styles.input}
// //         onChangeText={onChangeNumber}
// //         value={number}
// //         placeholder="useless placeholder"
// //         keyboardType="numeric"
// //       />
// //     </SafeAreaView>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {}
// // });

// // export default RegisterScreen;


// // import React from 'react';
// // import { View, StyleSheet,TextInput, SafeAreaView } from 'react-native';

// // function RegisterScreen() {
// //   return (
// //     <SafeAreaView>
// //     <View style={styles.container}>
// //       <TextInput>wwer</TextInput>
// //     </View>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   // container: {}
// // });

// // export default RegisterScreen;


// import React from "react";
// import { View, StyleSheet, TextInput ,Text,Image, SafeAreaView} from "react-native";

// const RegisterScreen = () => {
//   const [text, onChangeText] = React.useState("Useless Text");
//   const [number, onChangeNumber] = React.useState(null);

//   return (
//     <SafeAreaView>
//     <View>
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require('../assets/download.jpeg')}
//     />
//     {/* <Text style={styles.text}>NEWS APP</Text> */}
//     </View>
//     < View style={styles.view}>
     
//        <Text>Name</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeText}
//         value={text}
//         placeholder="Enter Your Name "
//         keyboardType="text"
//       />
//       <Text>Email Id</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeText}
//         value={text}
//         placeholder="Enter Your Email id "
//         keyboardType="text"
//       />
//       <Text>Password</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeNumber}
//         value={number}
//         placeholder="Enter Your Number"
//         keyboardType="numeric"
//       />
     
//     </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   view:{
//     marginTop:200
//   },
//   text
  
 
// });

// export default RegisterScreen;

import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import AppButton from '../components/AppButton';
// import AppButton from './components/AppButton';
// import colors from './config/colors';


function RegisterScreen(props) {
  return (
    <View style={styles.container}>

<Text>RegisterScreen</Text>
<View style={{paddingTop:"70%"}}>
  <AppButton title="HOD" color='maroon'></AppButton> 
   <AppButton title="STAFFS" color='maroon'></AppButton>
   <AppButton title="STUDENTS" color='maroon'></AppButton> 
   
   </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default RegisterScreen;