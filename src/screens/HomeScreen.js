import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return  <View>
      <Text style={styles.text}>Hi there !</Text>
      <Button 
      onPress={() => navigation.navigate('Components')}
      title='Go to Components Demo'
      />
      <Button
      onPress={() => navigation.navigate('List')}
      title='Go to List Demo'
      />

      <Button 
      onPress={() => navigation.navigate('Image')}
      title='Go to Image List'
      />
      <Button 
      onPress={() => navigation.navigate('Counter')}
      title='Go to Counter'
      />

      <Button 
      onPress={() => navigation.navigate('Color')}
      title='Go to Color Creator'
      />

      <Button 
      onPress={() => navigation.navigate('Square')}
      title='Go to Square creator'
      />
      </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
