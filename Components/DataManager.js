import Serializer from "./Serializer";

// Transformer le DataManager en Singleton ? Meilleur pour initialisation
class DataManager {

    static #favoriteData = [];
    static #nbFavoriteItems = 0;// Plus tard cela devra etre géré autrement

    // TODO Remove setOnReadFavoriteItems
    static setOnReadFavoriteItems() {
        Serializer.setOnReadFavoriteItemsCb((data) => {
            DataManager.setFavoriteData(data);
        });
    }

    static getNbFavoriteItems() {
        return this.#nbFavoriteItems;
    }

    static incrementNbFavoriteItems() {
        this.#nbFavoriteItems += 1;
    }

    static setFavoriteData(data) {
        //console.log("DATAMANAGER::setFavoriteData() AsynchStorage return DATA !!!");
        this.#favoriteData = data;
        //console.log(this.#favoriteData);
    }

    static favoriteItemsToJson(itemArray) {
        // console.log("---------------------------------------");
        // console.log("DataManager::favoriteItemsToJson()");

        let firstElement = true;
        let json = "{\"favoriteItems\" : ["
        itemArray.forEach(item => {
            let jsonItem = "";
            if (true === firstElement) {
                jsonItem = "\"" + item.name + "\"";
                firstElement = false;
            } else {
                jsonItem = ", \"" + item.name + "\"";
            }
            json += jsonItem;
        });
        json += "]}";

        //console.log("JSON save test " + json);
        Serializer.saveFavoriteItems(json);
        //console.log("+++++++++++++++++++++++++++++++++++++++");
    }

    static loadDataFromJson(finishLoadingCb) {
        // console.log(' ');
        // console.log("--> DataManager::loadDataFromJson");

        const data = Serializer.readFavoriteItems((dataAsynch) => {
            // console.log("Asynch Process finished");
            // console.log("Data = " + dataAsynch);

            if (0 !== dataAsynch && undefined !== dataAsynch.favoriteItems) {
                this.#favoriteData = dataAsynch.favoriteItems;
            }

            finishLoadingCb(dataAsynch);
        });

    }

    //  static getFavoriteItemsFromJson(){
    //    // console.log(' ');
    //    // console.log("--> DataManager::getFavoriteItemsFromJson");

    //    // const data = Serializer.readFavoriteItems();

    //    // if(0 !== data && undefined !== data.favoriteItems){
    //    //    console.log("LOAD JSON : " + data);
    //    //    console.log("LOAD FIELD : " + data.favoriteItems);
    //    //    // this.#favoriteData = data.favoriteItems
    //    // }else{
    //    //    console.log("LOAD JSON : 0");
    //    // }
    //    // console.log("--> END DataManager::getFavoriteItemsFromJson");

    //    return this.#favoriteData;
    //  }

    static getFavoriteItems() {
        return this.#favoriteData;
    }

    // todo : sauvegarde les listes de course
    shoppingListToJson() {

    }


    getShoppingListFromJson() {

    }

}

export default DataManager
