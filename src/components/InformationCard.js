import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const InformationCard = (props) => {
    return(
        <TouchableOpacity
        onPress={() => props.navigate('Details')}>
            <SafeAreaView>
                <View style = {styles.container}>
                    <Text style = {styles.context}>
                        {props.name}
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
        backgroundColor: '#00e676',
        alignSelf: "center",
        borderRadius: 10,
        alignItems: "center",
        alignContent: "center",
    },
    context:{
        fontSize: 15,
        fontWeight:"500",
        color: Colors.White,
    },
});

export default InformationCard;