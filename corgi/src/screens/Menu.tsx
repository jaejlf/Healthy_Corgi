import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import DrawerContents from "./DrawerContents"
import Login from "./Login";
import Navigator from "./Navigator";

const drawer = createDrawerNavigator();
const Menu = () => {
    return (<drawer.Navigator drawerContent = {(props) =><DrawerContents {...props}/>}>
        <drawer.Screen name = "Login" component = {Login}/>
        <drawer.Screen name="inApp" component={Navigator}/>
    </drawer.Navigator>);
}

export default Menu;