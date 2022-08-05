import React from 'react';
import {Text, StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import InformationCard from '../components/InformationCard';
import AddButton from '../components/AddButton';

const Home = ({ navigation }) => {
    const navigate = () => navigation.navigate("Details")
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
                navigation = {navigate}
                />
                <AddButton 
                navigation = {() => navigation.navigate("Details")}
                />
                
            </SafeAreaView>
        </ScrollView>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3f2fd',
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
})

export default Home;