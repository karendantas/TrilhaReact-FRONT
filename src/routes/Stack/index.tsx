import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { Form } from "../../components/FormsComponents/Forms";
import  {Home}  from "../../components/HomeComponents/Home"

const {Navigator, Screen} = createNativeStackNavigator()

export default function (){

   return (
    <Navigator>
        <Screen name = "Forms" component = {Form}/>
        <Screen name = "Home" component={Home}/>
    </Navigator>
   )


}
