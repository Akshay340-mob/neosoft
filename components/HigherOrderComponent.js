
import React from 'react';
import {StyleSheet,StatusBar,ImageBackground } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const HOC =(props)=>{
    return(<SafeAreaView style={styles.container}>
            <StatusBar hidden/>
            {props.children}
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    }
})

export default HOC