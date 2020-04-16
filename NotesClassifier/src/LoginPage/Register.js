import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { TextInput} from 'react-native-paper';
export default function SignUp ({navigation}) {
        const [name, setName]= useState("")
        const [email, setEmail] = useState("")
        const [phone, setPhone] = useState("")
        const [college, setCollege] = useState("")
        const [password, setPassword] = useState("")

                const submitData = ()=>{

                // Update the link below everytime you run the app unless you employ Heroku
            
            
                    fetch("http://83c9e957.ngrok.io/signUp",{
                        method:"post",
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify({
                            name,
                            email,
                            phone,
                            password,
                            college,
            
                        })
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        Alert.alert(`${data}`)
                        //Alert.alert(`Now Login with the credentials of ${data.name} `)
                        navigation.navigate("Login")
                    })
                    .catch(err=>{
                        Alert.alert("Some Error")
                        console.log(err)
                    })
                }

        return (
            <View style={styles.container}>
                <TextInput
                    label= 'Name'
                    theme = {theme}
                    mode='outlined'
                    value={name}
                    onChangeText={text => {setName ( text )}}
                    />
                    <TextInput
                    label='Email'
                    theme = {theme}
                    mode='outlined'
                    keyboardType= 'email-address'
                    value={email}
                    onChangeText={text => {setEmail ( text )}}
                    />
                    <TextInput
                    label='phone'
                    theme = {theme}
                    mode='outlined'
                    keyboardType='numeric'
                    value={phone}
                    onChangeText={text => {setPhone ( text )}}
                    />
                    <TextInput
                    label='college'
                    theme = {theme}
                    mode='outlined'
                    value={college}
                    onChangeText={text => {setCollege ( text )}}
                    />
                    <TextInput
                    label='password'
                    theme = {theme}
                    mode='outlined'
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => {setPassword ( text )}}
                    />
                    <View style={styles.button}>
                    <Button
                     title="Create Account"
                     onPress={()=> submitData()}
                    />
                    </View>
                    <View style={styles.button}>
                    <Button
                     title="Login "
                     onPress={()=> props.navigation.navigate("Login")}
                    />
                    </View>
            </View>
        );
    
}
const theme = {
    colors:{
        primary: 'skyblue'
    },
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10,

    },
    button:{
        padding:10,
        //justifyContent: 'center',
    }
})