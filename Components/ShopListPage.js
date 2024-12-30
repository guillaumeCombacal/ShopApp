// Components/FavoriteList.js
import React from 'react'
import { View, StyleSheet, Checkbox, Text } from 'react-native'
import DataTest from '../Data/FavoriteListDataTest'

// Function
// const ShopListPage = () => {
//     return (
//         <View style={styles.mainContainer}>

//             <View style={styles.addItemContainer}>
//                 <Checkbox value={false}/>
//                 <Text Item1 />
//             </View>

//             // TODO
//             {/* <FlatList
//                 data={this.state.dataList}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({item}) => <FavoriteItem favoriteItemData={item}/>}
//                 onEndReachedThreshold={0.5}
//                 onEndReached={() => {
//                     console.log("onEndReached")
//                 }}
//             /> */}

//         </View>
//     )
// }

/**
 * Page to gather all the shop made
 */
class ShopListPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = { dataList: DataTest }
    }

    render() {
        return (
            <View style={styles.mainContainer}>

                <View style={styles.addItemContainer}>
                    <Checkbox value={false}/>
                    <Text Item1 />
                </View>

                // TODO
                {/* <FlatList
                    data={this.state.dataList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FavoriteItem favoriteItemData={item}/>}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        console.log("onEndReached")
                    }}
                /> */}

            </View>
        )
    }
}

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

export default ShopListPage