import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


const setSchedule =(props)=>{
    return(
        <View style={styles.MainC}>
            <Text>Set Schedule</Text>
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
export default setSchedule ;