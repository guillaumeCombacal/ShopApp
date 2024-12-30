// Components/FavoriteList.js
import { React, useEffect } from 'react'
import { View, StyleSheet, TextInput, Button, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
//import DataTest from '../Data/FavoriteListDataTest'
import FavoriteList from './FavoriteList'
import DataManager from "./DataManager";
import { getFavoriteItems } from "./Serializer";
import EActionsType from "../Store/actionsType"


const FavoriteListPage = (props) => {

    // Recupère les data pour la liste dans l'asynchrone storage
    // Il faudra probablement mettre ç ailleurs dans une vraie initialisation 
    // DataManager.loadDataFromJson((jsonData) => {
    //     //console.log("Mainmenu-->Datamanager finished loading data  " + jsonData);
    //     _isDataLoaded = true;

    //     // test
    //     const action = { type: "TEST" };
    //     props.dispatch(action)
    // });

    // TODO : voir si il ne faut pas deplacer cette partie dans FavoriteList qui gère la FlatList d affichage
    // peut etre que getFavoriteItems() doit etre appeler dans le initialState du reducer

    // Call quand le composant est initialise, permet de charger des datas
    useEffect(() => {

        console.log("FavoriteListPage::componentDidMount");

        getFavoriteItems().then( (favoriteItems) => {
            const valueParse = JSON.parse(favoriteItems)["favoriteItems"];
                if (valueParse != undefined) {
                    const action = {type: "ADD_FAVORITE_ITEM", value: { id:0, name: valueParse}};
                    //const action = {type: EActionsType.TEST};
                    props.dispatch(action);
                }
            }
        )
        .catch(() => {
            console.log("getFavoriteItems() --> error");
        });

        // const favoriteItems = getFavoriteItems();
        // if (favoriteItems != undefined) {
        //     console.log(favoriteItems.favoriteItems[0]);
        //     const action = {type: EActionsType.ADD_FAVORITE_ITEM, value: { id:0, name: favoriteItems.favoriteItems[0]}};
        //     props.dispatch(action);
        // }
        

    }, []);

    return (
        <View style={styles.mainContainer}>

            {/* <View style={styles.addItemContainer}>
                <TextInput placeholder='Add Item' 
                onChangeText={(text) => this.nameAddItemChanged(text)} 
                onSubmitEditing={() => this.addFavoriteItem()}/>
                <Button title='Add' onPress={() => {this.addFavoriteItem()}}/>
            </View> */}

            <View style={styles.favoriteListContainer}>
                <FavoriteList /*favoriteListData={this.state.dataList} */ />
            </View>

            {/* <View style={styles.addSuppItemContainer}>
                <TouchableOpacity title='Add' onPress={() => {this.addFavoriteItem()}}/>
            </View> */}

        </View>
    )
}

/**
 * Page to handle the favorite items list
 */
// class FavoriteListPage extends React.Component {

//     // constructor par default a une propriété props
//     constructor(props) {
//         super(props)
//         //const loadFavoriteItems = DataManager.getFavoriteItemsFromJson();
//         //this.state = { dataList: DataManager.getFavoriteItemsFromJson() }
//         // this.nameAddItem = "";
//         // this.nbFavoriteItems = 0;
//     }

//     render() {
//         return (
//             <View style={styles.mainContainer}>

//                 {/* <View style={styles.addItemContainer}>
//                     <TextInput placeholder='Add Item' 
//                     onChangeText={(text) => this.nameAddItemChanged(text)} 
//                     onSubmitEditing={() => this.addFavoriteItem()}/>
//                     <Button title='Add' onPress={() => {this.addFavoriteItem()}}/>
//                 </View> */}

//                 <View style={styles.favoriteListContainer}>
//                     <FavoriteList /*favoriteListData={this.state.dataList}*/ />
//                 </View>

//                 {/* <View style={styles.addSuppItemContainer}>
//                     <TouchableOpacity title='Add' onPress={() => {this.addFavoriteItem()}}/>
//                 </View> */}

//             </View>
//         )
//     }

//     nameAddItemChanged(text){
//         this.nameAddItem = text
//     }

//     // TODO Le composant FavoriteList doit également avoir le btn add des items, 
//     // il ne doit pas être au niveau de la page
//     addFavoriteItem(){
//         // Action Redux
//         const action = {type: "TOGGLE_FAVORITE", value: { id:this.nbFavoriteItems, name:this.nameAddItem}};
//         this.nbFavoriteItems += 1;// todo faire différemment plus tard
//         this.props.dispatch(action);
//     }
// }

// TODO : enlever les parties inutiles
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'green'
    },
    addItemContainer: {
        flex: 1
    },
    addSuppItemContainer: {
        flex: 1
    },
    favoriteListContainer: {
        flex: 4
    }
})

const mapStateToProps = (state) => {
    console.log("FavoriteListPage --> mapStateToProps " + state);
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    //console.log("DISPATCH ACTION TEST => REDUCER");
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapDispatchToProps)(FavoriteListPage);

//export default FavoriteListPage;