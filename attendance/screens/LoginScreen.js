import React from 'react';
import { View, StyleSheet ,Text} from 'react-native';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
function LoginScreen(props) {
  return (
    <View style={styles.container}>

<Text>Login Screen</Text>
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

export default LoginScreen;