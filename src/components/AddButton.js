import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const AddButton = (props) => {
    const name = '+';
    return(
        <TouchableOpacity
            onPress={props.navigation}>
                
                <View style = {styles.container}>
                    <Text style = {styles.context}>
                        {name}
                    </Text>
                </View>
        </TouchableOpacity>           
    );
}

const styles = StyleSheet.create({
    container:{
        width: 50,
        height:50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        alignSelf:'center',
        backgroundColor: '#26c6da',
    },
    context:{
        fontSize: 30,
    },
});

export default AddButton;