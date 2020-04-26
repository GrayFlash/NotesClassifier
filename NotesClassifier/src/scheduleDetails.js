import React,{Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { Linking } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button} from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

const scheduleDetails =(props)=>{

    const { _id, name, purpose, date, time} = props.route.params.item
    const items = props.route.params.item
    console.log(items.name)
    const deleteSchedule = (_id) =>{
        fetch("http://c13addc7.ngrok.io/deleteSchedule",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                id:_id
            })
        }).then(res=>res.json())
        .then(deletedSch=>{
            Alert.alert(`${deletedSch.name} removed from schedule`)
            props.navigation.navigate("ScheduledFolder")
        }).catch(err=>{
            Alert.alert("Something went wrong")
        })
    }


    return(
        <View style={styles.MainC}>
            <LinearGradient
                colors={["#fcba03","#fff266"]}
                style={{height:"20%"}}
            />
            <ScrollView>
                <Card style={styles.myCard}
                key={_id}
                onPress={()=> props.navigation.navigate("viewFolders" , { items }) }
                >
                <View style={styles.cardContent}>
                <Entypo name="folder" size={32} color="#fcba03"/>
                <Text style={styles.myText}>{name}</Text>
                </View>
                </Card>
                <Card style={styles.myCard} >
                <View style={styles.cardContent}>
                <Text style={styles.myText}>Purpose: {purpose}</Text>
                </View>
                </Card>
                
                
                <Card style={styles.myCard} >
                <View style={styles.cardContent}>
                <Text style={styles.myText}>Date: {date}</Text>
                </View>
                </Card>
                
                
                <Card style={styles.myCard} >
                <View style={styles.cardContent}>
                <Text style={styles.myText}>Time: {time}</Text>
                </View>
                </Card>
                
                <View  style= {styles.buttonDesign }>
                    {/* <Button 
                    icon="square-edit-outline"
                    mode="container"
                    theme={theme}
                    onPress={() => {
                        props.navigation.navigate("setschedule",
                            {_id, name, purpose, date, time}
                        ) }}
                    >
                        Edit
                    </Button> */}
                    <Button 
                    icon="delete"
                    mode="contained"
                    theme={theme}
                    onPress={() => deleteSchedule(_id) }
                    >
                        Delete
                    </Button>
                </View>

            </ScrollView>
        </View>
    )
}


const theme = {
    colors:{
        primary:"red",
    },
    //padding: 10,
}

const styles = StyleSheet.create({
    MainC :{
        flex: 1,
    },
    myCard:{
        margin:3,
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
    buttonDesign:{
        flexDirection: 'row', 
        justifyContent:"space-around", 
        padding: 10,
    },
});
export default scheduleDetails ;