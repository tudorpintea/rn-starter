import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'friend #1', key: '1', age: 20},
        { name: 'friend #2', key: '2', age: 40},
        { name: 'friend #3', key: '3', age: 26},
        { name: 'friend #4', key: '4', age: 21},
        { name: 'friend #5', key: '5', age: 23},
        { name: 'friend #6', key: '6', age: 27},
        { name: 'friend #7', key: '7', age: 29},
        { name: 'friend #8', key: '8', age: 22},

    ]
    return (
    <FlatList 
        data={friends}
    renderItem={({item}) => {
    return <Text style={styles.textStyle}>{item.name} -Age: {item.age}</Text>
    }}
     /> 
    );
};

const styles = StyleSheet.create({
   textStyle: {
       marginVertical: 50
   }

})

export default ListScreen;