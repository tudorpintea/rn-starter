import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = (props) => {
    return <View>
        <ImageDetail title='Forest' imageSource={require('../../assets/forest.jpg')} imageScore={9}/>
        <ImageDetail title='Beach' imageSource={require('../../assets/beach.jpg')} imageScore={8}/>
        <ImageDetail title='Mountain' imageSource={require('../../assets/mountain.jpg')} imageScore={10}/>        
    </View>
}

const styles=StyleSheet.create({})

export default ImageScreen;