import React,{Component, useState} from 'react';
import { StyleSheet, Text, View, Modal, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const setSchedule =({navigation})=>{

    const [Name, setName] = useState("");
    const [Purpose, setPurpose] = useState("");
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [Data, setData] = useState("");
    const [Tima, setTima] = useState("");
    const onChange = (event, selectedDate, selectedTime) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        subStringify(currentDate);
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
      const subStringify = ( date ) =>{
          var x = date;
          date = String(x).substr(4,11);
          var timer = String(x).substr(16,5);
        //   console.log(String(x));
        //   console.log(date);
        //   console.log(timer);
          setData(date);
          setTima(timer);
      }
      const submitData = ()=>{

        // Update the link below everytime you run the app unless you employ Heroku
        
        
                fetch("http://096b5b96.ngrok.io/set-schedule",{
                    method:"post",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        //_id,
                        name: Name,
                        purpose: Purpose,
                        date: Data,
                        time: Tima,

                    })
                })
                .then(res=>res.json())
                .then(data=>{
                    Alert.alert(`Schedule for  ${data.name} have been set succesfully`)
                    navigation.navigate("HomePage")
                })
                .catch(err=>{
                    Alert.alert("Some Error")
                    console.log(err)
                })
            }


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
                onPress={()=> submitData() }>
                    Save Schedule
                </Button>
                <Button theme={theme} icon="cancel" onPress={()=>  navigation.navigate("HomePage") }>
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