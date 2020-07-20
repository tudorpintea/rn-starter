import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen =() => {
    return  <View style={styles.viewStyle}>
        <View style={styles.viewOneStyle} />
        <View style={styles.viewTwoStyle} />
        <View style={styles.viewThreeStyle} />

        

    </View>
}
const styles=StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },
   
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
        alignSelf: 'flex-end'
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green' 
    }

})

export default BoxScreen;