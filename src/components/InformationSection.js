import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const InformationSection = (props) => {
    return(
       
        <View>
            <View style = {styles.titleWrapper}>
                <Text style = {styles.context}>
                    {props.title}
                </Text>
            </View>
            <View style = {styles.titleWrapper}>
                <TextInput 
                style={styles.input}
                placeholder = {props.placeholder}
                />
            </View>
        </View>   
    );
}

const styles = StyleSheet.create({
    titleWrapper: {
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: "center",  
    },
    context: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#000',
    },
    input:{
        borderWidth: 1,
        width: 350,
        marginBottom: 10,
    }
});

export default InformationSection;