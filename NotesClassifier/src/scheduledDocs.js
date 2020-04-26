import React,{Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import {Card } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

const scheduledDocs =(props)=>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)


    const  fetchData = () =>{

        // Update the link below everytime you run the app unless you employ Heroku
        
                fetch("http://c13addc7.ngrok.io/scheduledDocsInfo")
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
                    onPress={()=> props.navigation.navigate("ScheduleDetails", {item})}>
                        <View style={styles.cardContent}>
                                <MaterialIcons name="schedule" size={32} color="red"/>
                                <View style={{flexDirection:'column'}}>
                                    <Text style={styles.myText}>{item.name}</Text>
                                    <Text style={{fontSize:14, color:'grey' }}>{item.date}</Text>
                                </View>
                                
                        </View>
                    </Card>
                )
            })

    return(
        <View style={styles.MainC}>
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
    )
}
const styles = StyleSheet.create({
    MainC :{
        flex: 1,
        
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
export default scheduledDocs ;