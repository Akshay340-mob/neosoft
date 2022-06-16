import { INIT_STATE , UPDATE_ITEM_AS_FAVOURITES,DELETE_FAV_ITEM,UPDATE_DISPLAY_LIST } from "../../constants/ActionsType";

const initialState ={
    all_places:[],
    displayingPlaces:[],
    favourites:[],
    isAuth:false
}

export default userInfoReducer = (state=initialState,action)=>{
    switch(action.type){
        case INIT_STATE:
            return{
                ...state,
                all_places:action.data,
                displayingPlaces:[...action.data.slice(0,20)],
                isAuth:true
            }
        case UPDATE_DISPLAY_LIST:
            return{
                ...state,
                displayingPlaces:[...state.displayingPlaces,...state.all_places.slice((action.count-1)*20,(action.count+1)*20)]
            }
        case UPDATE_ITEM_AS_FAVOURITES:
            return{
                ...state,
                displayingPlaces:[...state.displayingPlaces.slice(0,action.index),
                    {
                      ...action.item,
                        is_fav:true,
                    }
                    ,...state.displayingPlaces.slice(action.index+1)],
                 favourites:[...state.favourites,action.item]   
            }
        case DELETE_FAV_ITEM:
            return{
                ...state,
                displayingPlaces:[...state.displayingPlaces.slice(0,action.index),
                    {
                      ...action.item,
                        is_fav:false
                    }
                    ,...state.displayingPlaces.slice(action.index+1)],
                favourites:state.favourites.filter((ele,index)=>{
                    if(ele.API == action.item.API)
                        {
                            if(ele.Link == action.item.Link)
                                return false
                            else return true    
                        }
                     else return true   
                })
            }                
        default:
            return state 
    }
    
};
