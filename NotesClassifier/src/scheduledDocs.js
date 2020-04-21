import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


const scheduledDocs =(props)=>{
    return(
        <View style={styles.MainC}>
            <Text>Scheduled Documents to be displayed</Text>
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
export default scheduledDocs ;