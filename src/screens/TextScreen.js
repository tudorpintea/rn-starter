import React , {useState} from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { black } from 'color-name';

const TextScreen = () => {
  const [name,setName]=useState('')
   return <View>
       <Text>Enter Password:</Text>
       <TextInput 
       style={styles.input}
       autoCapitalize='none'
       autoCorrect={false}
       value={name}
       onChangeText={ (newValue) => setName(newValue) }
       />
       <Text>My name is {name}</Text>
       { name.length<5 ?
          <Text>Muie</Text>
          : <Text>caca</Text> }
   </View>
}

const styles=StyleSheet.create({
  input: {
      margin: 15,
      borderColor: 'black',
      borderWidth: 1

  }
})

export default TextScreen;