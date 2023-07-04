import { useRoute } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Details = () => {
    const {params}=useRoute();
    // console.warn(x)
    return (
        <View>
            <Text>{params.name}</Text>
            <Text>{params.username}</Text>

        </View>
    );
}

const styles = StyleSheet.create({})

export default Details;
