import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


const recent =(props)=>{
    return(
        <View style={styles.MainC}>
            <Text>Recently viewd Folders</Text>
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
export default recent ;