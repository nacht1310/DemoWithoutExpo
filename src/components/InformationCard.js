import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const InformationCard = (props) => {
    const name = props.name;
    return(
        <TouchableOpacity
        onPress={props.navigation}>
            <SafeAreaView>
                <View style = {styles.container}>
                    <Text style = {styles.context}>
                        {name}
                    </Text>
                </View>
            </SafeAreaView>
        </TouchableOpacity>      
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 8,
        marginBottom: 20,
        height: 40,
        width: 325,
        backgroundColor: '#80d8ff',
        alignSelf: "center",
        borderRadius: 10,
        alignItems: "center",
        alignContent: "center",
        flexWrap: 'wrap',
    },
    context:{
        fontSize: 15,
        fontWeight:"900",
        color: '#FFF',
    },
});

export default InformationCard;