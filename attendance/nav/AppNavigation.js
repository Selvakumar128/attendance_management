// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../HomeScreen';
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function AppNavigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default AppNavigation;


import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import WelcomeScreen from '../../screens/WelcomeScreen'
// import LoginScreen from '../../screens/LoginScreen'
import LoginScreen from '../screens/LoginScreen';
// import RegisterScreen from '../screens/RegisterScreen';
const Stack= createNativeStackNavigator();
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/> */}
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:true}}/>
                {/* <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:true}}/> */}
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}

export default AppNavigation;