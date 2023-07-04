import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {View,Text, StyleSheet, Pressable} from 'react-native';
import routes from '../common/routes';
import { usersContext } from '../contexts/usersContextProvider';

const Home = ({navigation}) => {
   const {users}=useContext(usersContext);

    return (
        <View>
            {users.map((ele)=><View key={ele.id} style={{flexDirection:"row"}}><Text style={{width:200}} key={ele.id}>{ele.name}</Text>
            <Pressable style={styles.btnContainer} onPress={()=>{navigation.navigate(routes.details,ele)}} >
                <Text>showDetails</Text>
            </Pressable>
            </View>)}
        </View>
    );
}

const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor:"#6c71c4",
        borderRadius:10,
        padding:10,
        margin:10,
      
      },
      txt:{
        color:"white",
        fontSize:20,
        textAlign:"center",
      
      },
})

export default Home;
