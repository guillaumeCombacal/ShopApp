import AsyncStorage from "@react-native-async-storage/async-storage"
//TODO : changer avec la version community

export async function getFavoriteItems() {
    try {
        const value = await AsyncStorage.getItem('@FavoriteItems');
        if (null !== value) {
            json = JSON.parse(value);
            console.log("getFavoriteItems() ==> " + value);
            return value;
        }
        else {
            console.log("value @FavoriteItems === null");
        }
    }
    catch (e) {
        console.log("ERROR Reading - Favorites Items : " + e);
    }
}

class Serializer {

    constructor() {
        this.onReadFavoriteItemsCb = () => { console.log("onReadFavoriteItemsCb not initialized") };
    }

    static setOnReadFavoriteItemsCb(cb) {
        //console.log("setOnReadFavoriteItemsCb");
        this.onReadFavoriteItemsCb = cb;
    }

    static saveFavoriteItems = async (favoriteItemsJson) => {
        try {
            await AsyncStorage.setItem('@FavoriteItems', favoriteItemsJson);
        }
        catch (e) {
            console.log("ERROR Serialization - Favorites Items : " + e);
        }
    }

    // TODO : voir si on peut return une promise
    // static readFavoriteItems = async () => {
    //   console.log(' ');
    //   console.log("Serializer::ReadFavoriteItems() : ");
    //   try {
    //     const value = await AsyncStorage.getItem('@FavoriteItems');
    //     let json = "";
    //     if(null !== value){
    //       json = JSON.parse(value);

    //       console.log("READ VALUE :" + value);
    //       console.log("READ JSON VALUE :" + json);
    //       console.log("READ JSON FIELD :" + json.favoriteItems);

    //       this.onReadFavoriteItemsCb(json.favoriteItems);
    //     }
    //     else{
    //       console.log("value @FavoriteItems === null");
    //     }
    //   } 
    //   catch (e) {
    //     console.log("ERROR Reading - Favorites Items : " + e);
    //   }
    // }

    static readFavoriteItems = async (callback) => {
        try {
            const promiseValue = AsyncStorage.getItem('@FavoriteItems');

            if (undefined !== promiseValue) {
                promiseValue.then((value) => {
                    let json = "";
                    if (null !== value) {
                        json = JSON.parse(value);

                        // console.log("READ VALUE :" + value);
                        // console.log("READ JSON VALUE :" + json);
                        // console.log("READ JSON FIELD :" + json.favoriteItems);

                        //this.onReadFavoriteItemsCb(json.favoriteItems);
                        callback(json.favoriteItems);
                    }
                    else {
                        console.log("value @FavoriteItems === null");
                    }
                }, () => {
                    console.log("ERROR get value on AsynchStorage");
                })
            }
        }
        catch (e) {
            console.log("ERROR Reading - Favorites Items : " + e);
        }
    }
}

export default Serializer