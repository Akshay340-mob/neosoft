import AsyncStorage from "@react-native-async-storage/async-storage";
import { INIT_STATE , UPDATE_ITEM_AS_FAVOURITES,DELETE_FAV_ITEM,UPDATE_DISPLAY_LIST } from "../../constants/ActionsType";

export const  fetchPlaces=(id)=> {
    return async(dispatch, getState, api) => {
        try {
            const data = await fetch('https://api.publicapis.org/entries');
        const response = await data.json();
        
        dispatch({type:INIT_STATE,data:response.entries})    
        } catch (error) {
            console.log(error)
        }
        
    }
  }

export const manupilatingFavourites=(index,item,type)=>{
    return async(dispatch)=>{
        
      try {
        const favdata =   await AsyncStorage.getItem('fav_list')
        const result = await JSON.parse(favdata)
        if(type == "select")
            {
              const favData =[...result,{...item}]
              await AsyncStorage.setItem('fav_list', JSON.stringify(favData))
              dispatch({type:UPDATE_ITEM_AS_FAVOURITES,index:index,item:item}) 
            }
        else{
            const favData=result.filter(ele => {
                if(ele.API == item.API)
                    {
                        if(ele.Link == item.Link)
                            return false
                        else return true    
                    }
                else return true    
            })
            await AsyncStorage.setItem('fav_list', JSON.stringify(favData))     
            dispatch({type:DELETE_FAV_ITEM,index:index,item:item,favData:favData})
            
            }
        } catch (error) {
         console.log(error)   
        }
    }
}

export const fetchFavourites=()=>{
        return async(dispatch)=>{
            try {
                const favdata =   await AsyncStorage.getItem('fav_list')
                const result = JSON.parse(favdata)
                dispatch({type:"SET_FAVOUTITES",favData:result})      
            } catch (error) {
                console.log(error)
            }
        }
}