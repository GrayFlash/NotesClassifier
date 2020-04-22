import React,{Component, useState} from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


const setSchedule =(props)=>{

    const [Name, setName] = useState("");
    const [Purpose, setPurpose] = useState("");
    const [modal, setmodal] = useState(false)

    return(
            <View style={{flex:1}}>
                <View style={styles.header}>
                    <Text style={styles.heading}>Set Your Schedule</Text>
                </View>
                <View style={styles.root}>
                <TextInput
                label='Name'
                theme = {theme}
                mode='outlined'
                value={Name}
                onChangeText={text => {setName ( text )}}
                />
                <TextInput
                label='Purpose'
                theme = {theme}
                mode='outlined'
                value={Purpose}
                onChangeText={text => {setPurpose ( text )}}
                />
                <View style = {styles.saveButtonsView}>
                <Button theme={theme} icon="content-save" mode="contained" 
                onPress={()=> console.log("Select Date Button") }>
                    Select Date
                </Button>
                <Text></Text>
                <Button theme={theme} icon="content-save" mode="contained" 
                onPress={()=> console.log("Set Time Button") }>
                    Set Time
                </Button>
                <Text></Text>
                <Button theme={theme} icon="content-save" mode="contained" 
                onPress={()=> console.log("Wants to save Schedule") }>
                    Save Schedule
                </Button>
                <Button theme={theme} icon="cancel" onPress={()=>  props.navigation.navigate("HomePage") }>
                    Cancel
                </Button>
                </View>
                </View>
            </View>
    )
}
const theme = {
    colors:{
        primary:"#fcba03",
        
    },
    //padding: 10,
}
const styles = StyleSheet.create({
    root:{
        flex:7,
        margin:10,
        padding:10
    },
    heading:{
        fontWeight: 'bold',
        fontSize: 20,
        color:"white",
    },
    header:{
        flex:1,
        backgroundColor: "#fcba03",
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButtonsView:{
        padding:10
    },
});
export default setSchedule ;