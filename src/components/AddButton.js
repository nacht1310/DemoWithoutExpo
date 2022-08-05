import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const AddButton = (props) => {
    const name = '+';
    return(
            <TouchableOpacity
        onPress={props.navigation}
        style = {styles.wrapper}
        >
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
    wrapper:{
        position:'absolute',
        bottom: 10,
    }
});

export default AddButton;