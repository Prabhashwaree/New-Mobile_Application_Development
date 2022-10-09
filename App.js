import React from "react";
import {Text,Link,HStack,Center,Heading, Switch,useColorMode,NativeBaseProvider,extendTheme,VStack, Box,} from "native-base";
import Signup from './screens/Signup'
import AddVehicals from './screens/AddVehicals'
import Login from './screens/Login'
import VehicalDetails from './screens/VehicalDetails'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
          {/* <Signup></Signup> */}
          {/* <AddVehicals></AddVehicals> */}
          {/* <Login></Login> */}
          {/* <VehicalDetails></VehicalDetails> */}

          <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="VehicalDetails" component={VehicalDetails} />
          {/* <Stack.Screen name="AddVehicals" component={AddVehicals} /> */}
        </Stack.Navigator>
      </NavigationContainer>



    </NativeBaseProvider>
  );
}
