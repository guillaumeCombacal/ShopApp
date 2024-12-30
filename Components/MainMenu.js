// Components/MainMenu.js
import React from 'react'
import { View, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import FavoriteListPage from './FavoriteListPage';


// TODO : Si on passe par une stack de navigation, le problème est que le MainMenu ne peut pas transmettre de props 
// aux éléments en dessous de lui
// pour cela il va falloir passer par des btn permettant d'accéder à la page suivante --> voir si c'est interessant
const MainMenu = (props) => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.btnContainer}>
                <Button style={styles.btn} color="#ff0000" title='Favorite List' 
                onPress={() => {props.navigation.navigate('FavoriteListPage')}}
                />
                {/* <Button style={styles.btn} title='Shopping List' onPress={() => {}}/> */}
                <TouchableOpacity style={styles.btn} onPress={
                    () => {
                        console.log("touchable press !!!");
                        // Action Redux
                        // const action = {type: "TEST"};//TODO faire une maj à partir des value du state global 
                        // props.dispatch(action)
                    }
                }>
                    <Image style={styles.img} source={require('../Ressources/shopping-cart-icon.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'green'
      },
      btnContainer: {
        marginTop: 200,
        marginLeft: 80,
        height: 200,
        width: 200,
        backgroundColor: 'yellow'
      }
      ,
      btn: {
        flex: 1
      },
      img: {
        width: 50,
        height: 25
      }
  })

  // const mapStateToProps = (state) => {
  //   console.log("MainMenu --> mapStateToProps ");
  //   return {

  //   }
  // }

  const mapDispatchToProps = (dispatch) => {
    //console.log("DISPATCH ACTION TEST => REDUCER");
    return {
        dispatch: (action) => {dispatch(action)}
    }
  }

export default connect(/*mapStateToProps,*/ mapDispatchToProps)(MainMenu);
//export default MainMenu