import React from 'react';
import { View,Text ,Pressable,Linking,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const RenderText=(props)=>{
        const {label,value} = props
    return(
        <Text style={styles.label}>{label} <Text 
                         style={[styles.value,{textDecorationLine:label=='Link'?'underline':'none',
                                color:label=='Link'?'#9796ff':'grey'}]}>{value}</Text></Text>
    )
}

const ListItem = (props) => {
    const {API,Description,Link,Category,is_fav} = props.item
    const {from} = props
    return (
        <View 
            key={API}
            style={[styles.card,{backgroundColor:from=="favourites"?"#f4f4ff":"#f9f7f2"}]}>
             
             <View style={{width:"97%"}}>
             <RenderText label="API" value={API}/>
             <RenderText label="Description" value={Description}/>
             <Pressable onPress={()=>Linking.openURL(`${Link}`)}>
            
                 <RenderText label="Link" value={Link}/>
               
             </Pressable>
             <RenderText label="Category" value={Category}/>
            
             </View>

            {props.from == "favourites"?null:<TouchableOpacity 
                style={{marginRight:5}} 
                onPress={is_fav?()=>props.onSelectFavourites(props.index,props.item,"delete")
                                    :()=>props.onSelectFavourites(props.index,props.item,"select")}>
             {is_fav ? 
                <Icon name="heart" size={20} color="tomato"/> : <Icon name="heart-outline" size={20}/>}
            </TouchableOpacity> }       
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:12,
        marginVertical:5,
        padding:10,
        shadowColor:"green",
        shadowOffset:{width:2,height:10},
        shadowOpacity:1,
        shadowRadius:20,
    },
  value:{fontWeight:"normal",fontSize:14},
  label:{fontWeight:"500",fontSize:14}  
})

export default React.memo(ListItem);