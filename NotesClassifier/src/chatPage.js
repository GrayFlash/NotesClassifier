import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


const chatPage =(props)=>{
    return(
        <View style={styles.MainC}>
            <Text>Chat Page</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    MainC :{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
});
export default chatPage ;