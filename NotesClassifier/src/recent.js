import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList,Alert } from 'react-native';
import {Card, FAB} from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

const recent = (props) =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const  fetchData = () =>{

        // Update the link below everytime you run the app unless you employ Heroku
        
                fetch("http://e0259279.ngrok.io/recent_view")
                .then(res=>res.json())
                .then(results=>{
                    setData(results)
                    setLoading(false)
                })
            }
        
            useEffect(()=>{
                fetchData()
            },[])

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

    export default recent ;
