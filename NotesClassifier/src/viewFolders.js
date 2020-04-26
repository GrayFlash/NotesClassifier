import React, {Component, useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, Modal, Platform, Alert } from 'react-native';
import {Linking } from 'expo';
import * as Permissions from 'expo-permissions';
import { Title , Card, Button, FAB, TextInput} from 'react-native-paper';
import { MaterialIcons, Feather, FontAwesome5, Entypo } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';


export default function viewFolders (props){


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState("")
    const  folderName  = props.route.params.item.name;
    const [modal, setmodal] = useState(false)
    const [uri, setUri] = useState("")

    const  fetchFolderDocuments = (folderName) =>{

        // Update the link below everytime you run the app unless you employ Heroku
        fetch("http://096b5b96.ngrok.io/getFolderDetails",{
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

    const handleDocUpload = async()=>{
        const {granted} = await Permissions.askAsync(Permissions.CAMERA);
        
        if(granted){
            let data = await DocumentPicker.getDocumentAsync({
                // mediaTypes: DocumentPicker.MediaTypeOptions.Document,
                // allowsEditing: true,
              });
              if(!data.cancelled){
                  let newfile = { 
                    steUri:data.uri, 
                    size:data.size
                }
                  //handleUpload(newfile)
              }

        }
        else{
            Alert.alert("you need to give permissions!")
        }
    }

    const saveData = ()=>{

        // Update the link below everytime you run the app unless you employ Heroku
        
        
                fetch("http://096b5b96.ngrok.io/uploadDocuments",{
                    method:"post",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        name,
                        document: uri,
                        folderName
                    })
                })
                .then(res=>res.json())
                .then(data=>{
                    Alert.alert(`Uploaded ${data.name} succesfully`)
                    setmodal(false)
                })
                .catch(err=>{
                    Alert.alert("Some Error")
                    console.log(err)
                })
            }

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
            onPress={() => setmodal(true) }
            style= {styles.fab}
            small ={false}
            icon="upload"
            />
            <Modal
            animationTye="slide"
            transparent={true}
            visible= {modal}
            onRequestClose={()=>{
                setmodal(false)
            }}
            >

                <View style={styles.modalView}>
                <TextInput
                    label='Name'
                    theme = {theme}
                    mode='outlined'
                    value={name}
                    onChangeText={text => {setName ( text )}}
                    />
                    <View style={styles.modalButtonView}>
                    
                    <Button theme={theme} icon="upload" mode="contained" onPress={()=> handleDocUpload() }>
                    Upload From Local Device.
                    </Button>
                    </View>
                    <Button theme={theme} icon="thumb-up" onPress={()=> saveData() }>
                        Save
                    </Button>
                    <Button theme={theme} icon="cancel" onPress={()=> setmodal(false) }>
                    Cancel
                    </Button>
                </View>
            </Modal>
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
        modalButtonView:{
            flexDirection: 'row',
            justifyContent:"space-around",
            alignItems: 'center',
            padding:10
        },
        modalView:{
            position: "absolute",
            bottom:2,
            width:"100%",
            backgroundColor:"white"
        }
    });
