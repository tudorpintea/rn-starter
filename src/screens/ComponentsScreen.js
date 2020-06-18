import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const name = 'Tudor'
   return (<View>
           <Text style={styles.what}>Getting sterted with rn</Text>
           <Text style={styles.me}>my name is {name}</Text>
          </View>
   )
};

const styles = StyleSheet.create({
    what: {
        fontSize: 45,
        fontFamily: 'Apple Color Emoji'
    },
    me: {
        fontSize: 30
    }
})

export default ComponentsScreen;