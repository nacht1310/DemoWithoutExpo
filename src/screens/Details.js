import React from 'react';

import { 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    TextInput,
    Text 
} from 'react-native';
import { useSelector } from 'react-redux';


const Details = ({route, navigation}) => {
    const iPerson = route.params.i 
    const info = useSelector((state) => state.people[iPerson])

    console.log(info)

    return(
        <View>
            {/* <Text style={styles.text}>Name</Text>
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
                onChangeText={newText => setEmail(newText)}/> */}
            

            {/* <TouchableOpacity onPress={addCardOnPress}>
                <View style = {styles.buttonWrapper}>
                    <Text style = {styles.button}>
                        Save changes
                    </Text>
                </View>
            </TouchableOpacity>      */}
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

export default Details;

