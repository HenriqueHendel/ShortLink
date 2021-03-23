 import React, {useState} from 'react';
 import {
   View,
   Text,
   StyleSheet,
   TextInput,
   TouchableOpacity,
   Keyboard,
   TouchableWithoutFeedback,   
 } from 'react-native';

 interface UrlProps {
   shortLink: string
   [key: string]: string | number
 }

 interface ResponseData {
   url: UrlProps
 }

 import Clipboard from '@react-native-community/clipboard'
 
 const App = () => {
   const [urlToBeShorted, setUrl] = useState('')
   const [name, setName] = useState('')
   const [shortedUrl, setShortedUrl] = useState('')
   const [buttonText, setButtonText] = useState('Encurtar')
   const [disable, setDisable] = useState(false)

   const handleShortUrl = async () => {
     setShortedUrl('')
     Keyboard.dismiss()
     if(urlToBeShorted.includes('https://') || urlToBeShorted.includes('http://')){
       setButtonText('Gerando Url...')
       setDisable(true)

       const response: Response = await fetch(`https://cutt.ly/api/api.php?key=f32ef845e270839a0d90e468c14b40216a615&short=${urlToBeShorted}&name=${name}`)
       const {url}: ResponseData = await response.json()

       setButtonText('Encurtar')
       setDisable(false)

       if(url.status === 3){
         alert('This name is already used')
         return
       }

       if(url.status === 2){
         alert('Invalid URL')
         return
       }

       setName('')
       setUrl('')
       setShortedUrl(url.shortLink)
       return
     }else {
      alert('Url needs to contain "https://" or "http://')
      return
     }
   }

   const copyUrl = () => {
     Clipboard.setString(shortedUrl)
     alert('Url copiada com sucesso!')
   }
 
   return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          value={urlToBeShorted}
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
          onPress={handleShortUrl}
          style={styles.button}
          
        >
          <Text style={{color: '#fff', fontSize: 20,}}>{buttonText}</Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={shortedUrl ? copyUrl : () => {}} disabled={disable}>
          <Text style={styles.generatedUrl}>{shortedUrl}</Text>
        </TouchableWithoutFeedback>

      </View>
    </TouchableWithoutFeedback>
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
 