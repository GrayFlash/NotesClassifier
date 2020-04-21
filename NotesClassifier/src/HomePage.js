import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView } from 'react-native';
import {Card, FAB} from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo } from '@expo/vector-icons';
import Notes from  './notes';

//const Drawer = createDrawerNavigator();

const HomePage=(props)=>{

    const data = [

        {id:"1", name:"Notes", description:"contains_all_the_notes"},
        {id:"2", name:"Scheduled Doc", description:"See and set you plans"},
        {id:"3", name:"Recent", description:"Opened Recently"}

    ];
    const checkIdtoNavigate=(item)=>{
    let ch = item.id;
    if(ch==='1'){
        props.navigation.navigate("NotesFolder",{item})
    }
    if(ch==='2'){
        props.navigation.navigate("ScheduledFolder",{item})
    }
    if(ch==='3'){
        props.navigation.navigate("RecentFolder",{item})
    }
    }
    const renderList = ((item)=>{
        return(
            <Card style={styles.myCard}
            key={item.id}
            //onPress={()=> props.navigation.navigate("NotesFolder",{item})}
            onPress = {()=> checkIdtoNavigate(item)}
            >
                <View style={styles.cardContent}>
                        <Entypo name="folder" size={32} color="#fcba03"/>
                        <View style={{flexDirection:'column'}}>
                            <Text style={styles.myText}>{item.name}</Text>
                            <Text style={{fontSize:14, color:'grey' }}>{item.description}</Text>
                        </View>
                        
                </View>
            </Card>
        )
    })
        return(
            <View style={styles.Home}>
                    <View style={styles.PageContent}>
                     
                            <FlatList
                            data = {data}
                            renderItem={({item})=>{
                            return renderList(item)
                            }}
                            />
                        
                </View>
                
            </View>
        );
    
}
const theme = {
    //roundness: 4,
    colors: {
      primary: "#fcba03",
      accent: '#fcba03',
    },
};
const styles=StyleSheet.create({
    Home:{
          flex: 1, 
          //alignItems: 'center',
          //justifyContent: 'center' 
        },
        Header:{
            flex:1,
            fontSize: 32,
            fontWeight:'bold',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "#fcba03",
        },
        headerflex:{
            flex:1,
            flexDirection: 'row',
        },
        PageContent:{
            flex: 8,
            backgroundColor: '#ebebeb',
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
    export default HomePage