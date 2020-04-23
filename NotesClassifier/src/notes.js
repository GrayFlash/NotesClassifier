import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList,Alert } from 'react-native';
import {Card, FAB} from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

const NotesFolder = (props) =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const  fetchData = () =>{

        // Update the link below everytime you run the app unless you employ Heroku
        
                fetch("http://5c9fa979.ngrok.io/")
                .then(res=>res.json())
                .then(results=>{
                    setData(results)
                    setLoading(false)
                })
            }
        
            useEffect(()=>{
                fetchData()
            },[])

    const recentData = (item)=>{

        fetch("http://5c9fa979.ngrok.io/recentFolder",{
                    method:"post",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        name: item.name,
                        description: item.description
                    })
                })
                .then(res=>res.json())
                .then(data=>{
                    Alert.alert(`Details of ${data.name} has been added to recent succesfully`)

                })
                .catch(err=>{
                    Alert.alert("Some Error")
                    console.log(err)
                })


    }
    const renderList = ((item)=>{
        return(
            <Card style={styles.myCard}
            key={item.id}
            onPress={()=> recentData(item)}>
                <View style={styles.cardContent}>
                        <Entypo name="folder" size={32} color="#fcba03"/>
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.myText}>{item.name}</Text>
                        </View>
                        
                </View>
            </Card>
        )
    })
        return(
            <View style={styles.Home}>
                <FlatList
                data = {data}
                renderItem={({item})=>{
                   return renderList(item)
                }}
                keyExtractor={item=>item._id}
                onRefresh={()=>fetchData()}
                refreshing={loading}
                />
                <FAB
                theme={theme}
                onPress={() =>  props.navigation.navigate("CreateNewFolder")}
                style= {styles.fab}
                small ={false}
                icon="plus"
            />
            </View>
        );
    
}
const theme={
    colors:{
        primary:"#fcba03",
        accent:"#fcba03",
    }
};
const styles=StyleSheet.create({
    Home:{
          flex: 1, 
          //alignItems: 'center',
          //justifyContent: 'center' 
        },
        fab:{
            position:'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
        },
        myCard:{
            margin:6,
        },
        cardContent:{
            flexDirection:'row',
            padding:10
        },
        myText:{
            fontSize:20,
            marginTop:3,
            marginLeft:7
        },
    });

export default NotesFolder