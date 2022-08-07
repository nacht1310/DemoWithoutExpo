import React from 'react';
import {View, Text} from 'react-native'
import { useSelector } from 'react-redux';

const Details = ({route, navigation}) => {
    const informationList = useSelector((state) => state.people)
    const {index} = route.params
    console.log(informationList[index])
    return(
        <View>
            <Text>
                This is Details Screen 
            </Text>
        </View>
    );
}

export default Details;