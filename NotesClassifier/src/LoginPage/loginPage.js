import React, { useState } from 'react';
import { Text, View, StyleSheet, Button , Switch, Alert} from 'react-native';
import { TextInput} from 'react-native-paper';

function login (props){
        const [userName, setUserName] =  useState("")
        const [Password, setPassword] = useState("")
        const password = ""
        const getData = () =>{
            
            // Update the link below everytime you run the app unless you employ Heroku
            
            
            fetch("http://83c9e957.ngrok.io/login",{
                method:"post",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    email: userName,
                    password: Password
                })
            })
            .then(res=>res.json())
            .then(data=>{
               console.log("Validating")
               console.log(`Defining password ${data.pasword}`)
                validate(data.password)
            })
            .catch(err=>{
                Alert.alert("Some Error")
                console.log(err)
            })

        }

        const validate= (password)=>{
            console.log(password)
            console.log(Password)
            if(password.localeCompare(Password)===0){
                console.log("Correct Password")
                Alert.alert("correct password")
            }
            else {
                Alert.alert("Incorrect password")
            }
        }

        return (
            <View style={styles.container}>
                <View style={{flex:1}}></View>
                <View style ={{flex:3}}>
                    <TextInput
                    label='User Name'
                    theme = {theme}
                    mode='outlined'
                    value={userName}
                    onChangeText={text => {setUserName ( text )}}
                    />
                
                    <TextInput
                    label='password'
                    theme = {theme}
                    mode='outlined'
                    value={Password}
                    secureTextEntry= {true}
                    onChangeText={text => {setPassword ( text )}}
                    />
        
            
                    <View style={styles.button}>
                    <Button
                     title="Login"
                     onPress={()=> getData()}
                    />
                    </View>
                    <View style={styles.button}>
                    <Button
                     title="Sign Up"
                     onPress={()=> props.navigation.navigate("SignUp")}
                    />
                    </View>
                </View>
            </View>
        );
    
}

const theme={
    colors:{
        primary: 'skyblue'
    },
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    button:{
        padding:10,
        justifyContent: 'center',
    }
});
export default login;
