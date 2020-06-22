import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

const ImageDetail = ({ imageSource, title, imageScore}) => {
    return <View>
        <Image source={imageSource} />
    <Text>{title}</Text>
    <Text>Image Score - {imageScore}</Text>
    </View>
}

const styles=StyleSheet.create({})

export default ImageDetail;