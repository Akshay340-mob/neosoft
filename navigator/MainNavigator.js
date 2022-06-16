import React from 'react';
import AllPlacesScreen from "../screens/Main/AllPlacesScreen";
import FavouritesScreen from "../screens/Main/FavouritesScreen";
import SplashScreen from "../screens/Auth/SplashScreen";
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator(); 



 export const AuthStack=()=>{
    return(<Stack.Navigator
      screenOptions={{headerShown:false}}>
       <Stack.Screen name="splash" component={SplashScreen}/>
    </Stack.Navigator>)
}


const HomeStack=()=>{
    return(<Stack.Navigator
      screenOptions={{headerShown:false}}>
       <Stack.Screen name="Home" component={AllPlacesScreen} />
    </Stack.Navigator>)
}



 const ListStack=()=>{
    return(<Stack.Navigator
      screenOptions={{headerShown:false}}>
       <Stack.Screen name="Favourites" component={FavouritesScreen} />
    </Stack.Navigator>)
}


export const MainNavigator=()=>{
    return(<Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
    
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Favourites') {
              iconName = 'rocket-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })
      }
        tabBarOptions={{
          activeTintColor: '#53C7B4',
          inactiveTintColor: '#ADB4BD'
        }}>
          <Tab.Screen name="Home" component={HomeStack}/>
          
          <Tab.Screen name="Favourites" component={ListStack}/>
      </Tab.Navigator>)
    }


  export const AdvanceNavigator=()=>{
      return(<Drawer.Navigator initialRouteName="Homie">
      <Drawer.Screen name="Home" component={MainNavigator} />
      <Drawer.Screen name="Favourites" component={ListStack} />
    </Drawer.Navigator>)
    }