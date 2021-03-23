 import React, {useState} from 'react';
 import {
   View,
   Text,
   StyleSheet,
   TextInput,
   TouchableOpacity
 } from 'react-native';
 
 const App = () => {
   const [url, setUrl] = useState('')
   const [name, setName] = useState('')
 
   return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Short
        <Text style={{color: '#1056f7'}}>
          Link
        </Text>
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={text => setUrl(text)}
        value={url}
        placeholder='Digite a url'
        placeholderTextColor='#21243d'
      />

      <TextInput
        style={styles.input}
        onChangeText={text => setName(text)}
        value={name}
        placeholder='Nome Personalizado'
        placeholderTextColor='#21243d'
      />

      <TouchableOpacity 
        onPress={()=>{}}
        style={styles.button}
      >
        <Text style={{color: '#fff', fontSize: 20,}}>Encurtar</Text>
      </TouchableOpacity>

      <Text style={styles.generatedUrl}>https://cuttly.com/NomeUrlPersonalizada</Text>

    </View>
   );
 };

 const styles = StyleSheet.create({
   container: {
     backgroundColor: '#fff',
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },
   title:{
    color: '#21243d',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 20
   },
   input: {
    height: 50,
    width: '80%',
    borderColor: '#21243d',
    color: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FAFAFA',
    marginBottom: 20,
    fontSize: 20
   },
   button: {
     backgroundColor: '#ff7c7c',
     borderRadius: 20,
     height: 40,
     width: '80%',
     justifyContent: 'center',
     alignItems: 'center',
   },
   generatedUrl: {
     height: 40,
     width: '80%',
     marginTop: 20,
     fontSize: 20,
     textAlign: 'center'
   }
 })

 
 export default App;
 