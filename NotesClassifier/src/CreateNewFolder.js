import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, Modal, Alert} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const CreateNewFolder = (props) => {
    const [Name, setName] = useState("")
    const [Description, setDescription] = useState("")
    
    return(
        <View style={styles.root}>
            <TextInput
                label='Name'
                theme = {theme}
                mode='outlined'
                value={Name}
                onChangeText={text => {setName ( text )}}
            />
            <TextInput
                label='Description'
                theme = {theme}
                mode='outlined'
                value={Description}
                onChangeText={text => {setDescription( text )}}
            />
            <View style = {styles.saveButtonsView}>
            <Button theme={theme} icon="content-save" mode="contained" onPress={()=> console.log("Saved Details") }>
                Save
            </Button>
            <Button theme={theme} icon="cancel" onPress={()=>  props.navigation.navigate("HomePage") }>
                    Cancel
                    </Button>
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
        flex:1,
        margin:10,
        padding:10
    },
    button:{
        color:"red",
    },
    saveButtonsView:{
        padding:10,
      //  alignItems:'center',
        //justifyContent:"space-around",
    },
})
export default CreateNewFolder;