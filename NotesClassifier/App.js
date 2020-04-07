import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/HomePage/HomePage';
import NotesFolder from './src/notes';
import CreateNewFolder from './src/CreateNewFolder';
import Icon from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const stackDesignHead = {
          title: "Notes Classifier", 
          
          headerTintColor:"white", 
          headerStyle:{ 
            backgroundColor:"#fcba03"
            
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
}
function LeftDrawer () {
  return(
        
          
          <Stack.Navigator>
          <Stack.Screen 
          name="HomePage"
          component={HomePage} 
          options={stackDesignHead}
          />
          <Stack.Screen 
          name="NotesFolder"
          component={NotesFolder} 
          options={{...stackDesignHead,title:"Notes"}}
          />
          <Stack.Screen 
          name="CreateNewFolder"
          component={CreateNewFolder} 
          options={{...stackDesignHead,title:"+ new Folder"}}
          />
          
          </Stack.Navigator>
  )
}

const menuDesignHead = {
  title: "Notes Classifier",
  
  headerTintColor:"white",
  headerStyle:{
    backgroundColor:"#fcba03"
    
    },
  headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitleAlign: 'center'
    
}

function App () {

  return(
        <View style={styles.container}>
          <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen 
              name="Home"
              component={LeftDrawer} 
              options={{menuDesignHead}}
              />
              </Drawer.Navigator>
        </View>
  );
}
export default()=>{
  return(
    <NavigationContainer>
      <App/>
      
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex :1,
    backgroundColor: '#ebebeb',
   // marginTop:Constants.statusBarHeight,
  },
});

