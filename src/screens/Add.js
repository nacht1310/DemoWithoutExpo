import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import InformationSection from '../components/InformationSection'

const Add = ({navigation }) => {
    const navigate = () => navigation.navigate("Home")
    return (
    <View style = {styles.container}>
        <ScrollView>
            <SafeAreaView>
                <InformationSection title = 'Name' placeholder = "Enter your name"/>
                <InformationSection title = 'Email' placeholder = "Enter your Email"/> 
                <InformationSection title = 'Phone Number' placeholder = "Enter your phone number"/>  
                <TouchableOpacity>
                    <View style = {styles.buttonWrapper}>
                        <Text style = {styles.button}>
                            Submit
                        </Text>
                    </View>
                </TouchableOpacity>     
            </SafeAreaView>
        </ScrollView>
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
        flex: 1,
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
    }
})

export default Add;