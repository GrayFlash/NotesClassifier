import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export default function LoginOrSignUp (props) {
    return(
        <View style={styles.container}>
            <View style={styles.button}>
            <Button
                title="Login"
                onPress={()=> props.navigation.navigate("Login")}
            />
            </View>
            <View style={styles.button}>
            <Button
                title="Sign Up"
                onPress={()=> props.navigation.navigate("SignUp")}
            />
            </View>
            {/* <Text>Or</Text> */}
            
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        //alignItems: 'center',
        backgroundColor: '#baf6ff',
        justifyContent: 'center',
        padding: 40,
        //marginTop: Constants.statusBarHeight,

    },
     button:{
         padding:10,
         justifyContent: 'center',
     }
});