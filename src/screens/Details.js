import React from 'react';
import {View, Text} from 'react-native'
import { useSelector } from 'react-redux';

const Details = ({route, navigation}) => {
    const iPerson = route.params.i 
    const info = useSelector((state) => state.people[iPerson])

    return(
        <View>
            <Text>
                This is Details Screen
            </Text>
        </View>
    );
}

export default Details;