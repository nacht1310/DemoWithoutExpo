import React from 'react';
import {Text, StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import InformationCard from '../components/InformationCard';

const Home = () => {
    return (
    <View style = {styles.container}>
        <ScrollView>
            <SafeAreaView>
                <View style = {styles.titleWarpper}>
                    <Text style = {styles.title}>
                        Information
                    </Text>
                </View>
                <InformationCard 
                name = "Hello, World" 
                style = {styles.context}
                />
            </SafeAreaView>
        </ScrollView>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    titleWarpper: {
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: "center",  
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: Colors.black,
    },
    context:{
        fontSize: 15,
        fontWeight:"500",
        color: Colors.White,
    },
})

export default Home;