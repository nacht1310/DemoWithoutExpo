import React from 'react';
import { useState } from 'react';

import { 
    StyleSheet, 
    SafeAreaView, 
    ScrollView, 
    View, 
    TouchableOpacity, 
    TextInput,
    Text 
} from 'react-native';
import InformationSection from '../components/InformationSection'
import {useDispatch} from 'react-redux'
import {addCardAction} from '../redux/actions.js'

const Add = ({navigation }) => {
    const navigate = () => navigation.navigate("Home")
    const dispatch = useDispatch()

    const addCardOnPress = () => {
        dispatch(addCardAction({
          name: inputName,
          phone: inputPhone,
          email: inputEmail
        }))
  
        navigation.navigate('Home')
    }

    const [inputName, setName] = useState('')
    const [inputPhone, setPhone] = useState('')
    const [inputEmail, setEmail] = useState('')

    return (
    <View style = {styles.container}>
        <SafeAreaView>

            {/* <InformationSection title = 'Name' placeholder = "Enter your name"/>
            <InformationSection title = 'Email' placeholder = "Enter your Email"/> 
            <InformationSection title = 'Phone Number' placeholder = "Enter your phone number"/>  
            */}
            
            <Text style={styles.text}>Enter your name</Text>
            <TextInput style={styles.input} 
                onChangeText={newText => setName(newText)}/>
            
            <Text style={styles.text}>Enter your phone number</Text>
            <TextInput style={styles.input}
                onChangeText={newText => setPhone(newText)}/>
            
            <Text style={styles.text}>Enter your email</Text>
            <TextInput style={styles.input}
                onChangeText={newText => setEmail(newText)}/>
            

            <TouchableOpacity onPress={addCardOnPress}>
                <View style = {styles.buttonWrapper}>
                    <Text style = {styles.button}>
                        Submit
                    </Text>
                </View>
            </TouchableOpacity>     

            
        </SafeAreaView>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3f2fd',
        flexDirection: 'column',
    },
    buttonWrapper:{
        alignSelf: 'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#303f9f',
        width: 100,
        height: 40,
    },
    button: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    input:{
        margin: 5,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    text: {
        margin: 5,
    }
})

export default Add;