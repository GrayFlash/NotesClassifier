import React,{Component, useState} from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import DateTimePicker from '@react-native-community/datetimepicker';

const setSchedule =(props)=>{

    const [Name, setName] = useState("");
    const [Purpose, setPurpose] = useState("");
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [modal, setmodal] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };

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
                onPress={()=>showDatepicker()} >
                    Select Date
                </Button>
                <Text></Text>
                <Button theme={theme} icon="content-save" mode="contained" 
                onPress={()=>showTimepicker()} >
                    Set Time
                </Button>
                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    />
                )}
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