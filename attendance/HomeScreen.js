// import React from 'react';
// import {StyleSheet, View,Button  } from 'react-native';
// import CustomText from './CustomText';
// import {MaterialCommunityIcons} from "@expo/vector-icons"
// import CustomButton from './CustomButton';
// import colors from './config/colors';
// const HomeScreen = () => {
//     return (
//         <View style={styles.container}>
//             <MaterialCommunityIcons size={100} color="blue" name="email"></MaterialCommunityIcons>
//             {/* <CustomText>Welcome to my app</CustomText> */}
//             <CustomButton title="REGISTER" color={colors.primary} onPress={()=>console.log('Im register')}></CustomButton>
//             <CustomButton title="REGISTER" color={colors.primary} onPress={()=>console.log('Im louin')}></CustomButton>
//             <Button color="orange" title="original" onPress={()=>console.log('Im original')}></Button>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
// });
  
// export default HomeScreen;

import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import AppButton from './components/AppButton';
import colors from './config/colors';

function HomeScreen(props) {
  return (
    <View style={styles.container}>
        {/* <Image style={styles.logo} source={require("../assets/news.jpeg")} /> */}
   <Text>HomeScreen</Text>
   <View style={{paddingTop:"70%"}}>
   <AppButton title="Register" color='maroon'></AppButton>
   <AppButton title="Log In" color='maroon'></AppButton>
   </View>
    {/* <Image
      style={styles.logo}
      source={{
        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
      }}
    /> */}
  </View>
);
};

const styles = StyleSheet.create({
  container: {}
});

export default HomeScreen;