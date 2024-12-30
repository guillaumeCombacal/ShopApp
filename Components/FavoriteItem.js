// Components/FavoriteItem.js

import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

// FUNCTION
const FavoriteItem = (props) => {
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.name}>{props.favoriteItemData.name}</Text>
        <Button title='Delete' onPress={() => {console.log("deleted")}}/>
    </View>
  )
}

// class FavoriteItem extends React.Component {
  
//   constructor(props) {
//     super(props)
//     this.state = { itemData: this.props.favoriteItemData, 
//                    nameItem: this.props.favoriteItemData.name
//     };
//   }

//   render() {
//     console.log("name => " + this.state.nameItem);
//     return (
//         <View style={styles.mainContainer}>
//             <Text style={styles.name}>{this.state.nameItem}</Text>
//             <Button title='Delete' onPress={() => {console.log("deleted")}}/>
//         </View>
//     )
//   }
// }

const styles = StyleSheet.create({
    mainContainer: {
        height: 80
      },
      name: {
      }
})

export default FavoriteItem