import React from 'react';
import { useState } from 'react';

import { 
    StyleSheet, 
    SafeAreaView, 
    View, 
    TouchableOpacity, 
    Text 
} from 'react-native';
// import InformationSection from '../components/InformationSection'
import {useDispatch} from 'react-redux'
import {addCardAction} from '../redux/actions.js'
import InformationSection from '../components/InformationSection.js';

const Add = ({navigation }) => {
    const dispatch = useDispatch()
    const handleError = (text, input) => {
        setError(previousState => ({...previousState, [input]: text}))
    }
    const addCardOnPress = () => {
        let valid = true
        if(!inputName) {
            handleError('Please input your name', 'name')
            console.log(errorMsg)
            valid = false
        }
        else {
            handleError('', 'name')
            valid = true
        }
        if(!inputPhone) {
            handleError('Please input your phone number', 'phone')
            console.log(errorMsg)
            valid = false
        }
        else {
            handleError('', 'phone')
            valid = true
        }
        if(!inputEmail) {
            handleError('Please input your email', 'email')
            console.log(errorMsg)
            valid = false
        }
        else if(!inputEmail.match(/\S+@\S+\.\S+/)){
            handleError('Please input valid email', 'email')
            valid = false
        }
        else {
            handleError('', 'email')
            valid = true
        }
        if(valid === true) {
            dispatch(addCardAction({
                name: inputName,
                phone: inputPhone,
                email: inputEmail
              }))
            navigation.navigate('Home')
        }
        
    }

    const [inputName, setName] = useState('')
    const [inputPhone, setPhone] = useState('')
    const [inputEmail, setEmail] = useState('')
    const [errorMsg, setError] = useState({})

    return (
    <View style = {styles.container}>
        <SafeAreaView>
            
            <InformationSection label = "Enter your name" 
            onChangeText={newText => setName(newText)}
            autoCapitalize = "words" 
            error={errorMsg.name}/>
            
            <InformationSection label = "Enter your phone number" 
            onChangeText={newText => setPhone(newText)}
            keyboardType = "numeric" 
            error={errorMsg.phone}/>

            <InformationSection label = "Enter your email" 
            onChangeText={newText => setEmail(newText)} 
            error={errorMsg.email}/>                    

            <TouchableOpacity onPress={addCardOnPress}
                style = {styles.buttonWrapper}
                activeOpacity = {0.7}>
                    <Text style = {styles.button}>
                        Submit
                    </Text>
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
        marginVertical: 10
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
        borderWidth: 1,
        width: 350,
        alignSelf: 'center'
    },
    text: {
        marginLeft: 20,
        marginBottom:10,
        marginTop: 10,
    }
})

export default Add;