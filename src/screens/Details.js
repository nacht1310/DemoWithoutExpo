import React from 'react';
import { useState } from 'react';

import { 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    TextInput,
    Text 
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import {editCardAction} from '../redux/actions.js'


const Details = ({route, navigation}) => {
    const iPerson = route.params.i 
    const info = useSelector((state) => state.people[iPerson])
    const dispatch = useDispatch()

    const editCardOnPress = () => {
        dispatch(editCardAction(
            iPerson, 
            {name: inputName, phone: inputPhone, email: inputEmail}
        ))
        setIsRender(!isRender)
        navigation.navigate('Home', {isRender: isRender})
    }
    const [isRender, setIsRender] = useState(false);
    const [inputName, setName] = useState(info.name)
    const [inputPhone, setPhone] = useState(info.phone)
    const [inputEmail, setEmail] = useState(info.email)
    
    return(
        <View>
            <Text style={styles.text}>Name</Text>
            <TextInput style={styles.input} 
                defaultValue = {info.name}
                onChangeText={newText => setName(newText)}/>
            
            <Text style={styles.text}>Phone number</Text>
            <TextInput style={styles.input}
                defaultValue = {info.phone}
                onChangeText={newText => setPhone(newText)}/>
            
            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.input}
                defaultValue = {info.email}
                onChangeText={newText => setEmail(newText)}/>
            

            <TouchableOpacity onPress={editCardOnPress}>
                <View style = {styles.buttonWrapper}>
                    <Text style = {styles.button}>
                        Save changes
                    </Text>
                </View>
            </TouchableOpacity>     
        </View>
    )
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
        width: 200,
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

export default Details;

