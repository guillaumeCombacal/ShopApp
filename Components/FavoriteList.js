// Components/FavoriteList.js
import React, { useState } from 'react'
import { View, StyleSheet, Button, FlatList, TextInput } from 'react-native'
import FavoriteItem from './FavoriteItem'
import DataManager from "./DataManager";
import EActionsType from "../Store/actionsType"
import { connect } from 'react-redux'

const FavoriteList = (props) => {

    let nameAddItem = "";

    const [favoriteListIems, setFavoriteListItems] = useState(true);

    //TODO state avec les données chargees
    // TODO : props.favoriteItemsDataList est toujours [] pourtant un peu plus tard l asynchrone storage renvoie les data...
    // Il faudrait qu à la récupération asynchrone le reducer disptach les data pour que ça finisse dans mapStateToProps
    // Il faut peut etre creer une action pour que le reducer essaie de récupérer les données

    // --> La page MainMenu doit attendre que les données soient chargées avant de donner la possibilite
    // à l utilisateur de naviguer.

    console.log("INIT FavoriteList")
    console.log(props.favoriteItemsDataList)
    console.log("-----------------")
    

    return (
        
        <View style={styles.mainContainer}>

            <View style={styles.addItemContainer}>
                 <TextInput placeholder='Add Item' 
                onChangeText={(text) => nameAddItemChanged(text)} 
                onSubmitEditing={() => addFavoriteItem()}/>
                <Button title='Add' onPress={() => addFavoriteItem()}/>
            </View>

            <FlatList
                data={props.favoriteItemsDataList}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FavoriteItem favoriteItemData={item}/>}
                onEndReachedThreshold={0.5}
                onEndReached={() =>
                    console.log("onEndReached")
                }
            />
        </View>
    )

    // TODO il faudra faire une promesse ou lire les éléments du sérializer avant et le stocker dans (DataManager)
    // car getFavoriteItemsFromJson ne renvoie pas forcément quelque chose lorsqu on l appel ici
    function initListElements(){
        console.log(' ');
        console.log("--> FavoriteList::initListElements")
        
        let favoriteItems = DataManager.getFavoriteItemsFromJson();
        if(favoriteItems !== []){
            let itemsArray = [];
            favoriteItems.forEach(element => {
                itemsArray.push({ id:DataManager.getNbFavoriteItems(), name:element});
                DataManager.incrementNbFavoriteItems();;// todo faire différemment plus tard
            });
        }
        console.log("--> END FavoriteList::initListElements")
        return itemsArray;
    }

    function nameAddItemChanged(text) {
        nameAddItem = text;
    }
    
    
    function addFavoriteItem(){
        // Action Redux
        const action = {type: EActionsType.ADD_FAVORITE_ITEM, value: { id:DataManager.getNbFavoriteItems(), name:nameAddItem}};

        DataManager.incrementNbFavoriteItems();
        props.dispatchFavoriteItem(action);
    }

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'green'
    }
})

// return the favoritesItem values inside the props favoriteItemsDataList of the component FavoriteList (connected to)
// favoriteItemsDataList do not need to exist
const mapStateToProps = (state) => {
    console.log("FavoriteList --> mapStateToProps " + state.favoriteItemsReducer.testReducer);
    return {
        favoriteItemsDataList: state.favoriteItemsReducer.favoritesItem
    }
}


const mapDispatchToProps = (dispatch) => {
    console.log("DISPATCH ACTION --> Reducer");
    return {
        dispatchFavoriteItem: (action) => {dispatch(action)}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList)