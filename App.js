import React from "react";
import {Text,Link,HStack,Center,Heading, Switch,useColorMode,NativeBaseProvider,extendTheme,VStack, Box,} from "native-base";
import Signup from './screens/Signup'
import AddVehicals from './screens/AddVehicals'
import Login from './screens/Login'
import VehicalDetails from './screens/VehicalDetails'

export default function App() {
  return (
    <NativeBaseProvider>
          {/* <Signup></Signup> */}
          {/* <AddVehicals></AddVehicals> */}
          {/* <Login></Login> */}
          <VehicalDetails></VehicalDetails>
    </NativeBaseProvider>
  );
}
