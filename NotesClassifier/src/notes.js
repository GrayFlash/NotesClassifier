import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import {Card, FAB} from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

const NotesFolder = (props) =>{
    const data = [

        {id:"1", name:"Mathematics"},
        {id:"2", name:"Branch-Specific"},
        {id:"3", name:"EM"}

    ];
    const renderList = ((item)=>{
        return(
            <Card style={styles.myCard}
            key={item.id}>
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