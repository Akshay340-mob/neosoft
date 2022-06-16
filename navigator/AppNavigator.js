import React from 'react';
import {  MainNavigator , AuthStack,AdvanceNavigator } from "./MainNavigator";
import { useSelector  } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

const AppNavigator = () => {
        const isAuth = useSelector(state=>state.info.isAuth)
 
    return(<NavigationContainer>
                {isAuth?<AdvanceNavigator/>:<AuthStack/>}
            </NavigationContainer>
        );
}

export default AppNavigator;