import React, {Component, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView,  Platform, Alert } from 'react-native';
import {Linking } from 'expo';
import { Title , Card, Button, FAB} from 'react-native-paper';
import { MaterialIcons, Feather, FontAwesome5, Entypo } from '@expo/vector-icons';

export default function viewFolders (props){


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const  folderName  = props.route.params.item.name;

    console.log(`${folderName} aa gaya`);


    const  fetchFolderDocuments = (folderName) =>{

        // Update the link below everytime you run the app unless you employ Heroku
        fetch("http://c13addc7.ngrok.io/getFolderDetails",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                folderName
            })
        }).then(res=>res.json()).then(results=>{
                    setData(results)
                    setLoading(false)
                })
            }
        
            useEffect(()=>{
                fetchFolderDocuments(folderName)
            },[])



    const renderList = ((item)=>{
        return(
            <Card style={styles.myCard}
            key={item.id}
            onPress={()=> console.log("Can't Open  Document features currently") }>
                <View style={styles.cardContent}>
                        <FontAwesome5 name="file-pdf" size={32} color="#ff1100"/>
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
            onRefresh={()=>fetchFolderDocuments(folderName)}
            refreshing={loading}
            />
            <Text></Text>
            <FAB
            theme={theme}
            onPress={() =>  console.log("Upload Documents")}
            style= {styles.fab}
            small ={false}
            icon="upload"
        />
        </View>
    );

}
const theme={
    colors:{
        primary:"#ff1100",
        accent:"#ff1100",
    }
};

const styles=StyleSheet.create({
    Home:{
          flex: 1,
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
