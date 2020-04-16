import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/HomePage';
import NotesFolder from './src/notes';
import chatPage from './src/chatPage';
import CreateNewFolder from './src/CreateNewFolder';
import LoginOrSignUp from './src/LoginPage/LogOrSignUp';
import login from './src/LoginPage/loginPage';
import SignUp from './src/LoginPage/Register';
import Icon from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();
 const Stack = createStackNavigator();
// const stackDesignHead = {
//           title: "Notes Classifier", 
          
//           headerTintColor:"white", 
//           headerStyle:{ 
//             backgroundColor:"#fcba03"
            
//             },
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
//             headerTitleAlign: 'center'
// }
// function LeftDrawer () {
//   return(
        
          
//           <Stack.Navigator>
//           <Stack.Screen 
//           name="HomePage"
//           component={HomePage} 
//           options={stackDesignHead}
//           />
//           <Stack.Screen 
//           name="NotesFolder"
//           component={NotesFolder} 
//           options={{...stackDesignHead,title:"Notes"}}
//           />
//           <Stack.Screen 
//           name="CreateNewFolder"
//           component={CreateNewFolder} 
//           options={{...stackDesignHead,title:"+ new Folder"}}
//           />
          
//           </Stack.Navigator> 
//   )
// }

// const menuDesignHead = {
//   title: "Notes Classifier",
  
//   headerTintColor:"white",
//   headerStyle:{
//     backgroundColor:"#fcba03"
    
//     },
//   headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//     headerTitleAlign: 'center'
    
// }

// function App () {

//   return(
//         <View style={styles.container}>
//           <Drawer.Navigator initialRouteName="HomePage">
//               <Drawer.Screen 
//               name="HomePage"
//               component={LeftDrawer} 
//               options={{menuDesignHead}}
//               />
//               <Drawer.Screen 
//               name="Nothing Yet"
//               component={chatPage} 
//               options={{...menuDesignHead, title:"Chat Bot"}}
//               />
//               </Drawer.Navigator>
//         </View>
//   );
// }
// export default()=>{
//   return(
//     <NavigationContainer>
//       <App/>
      
//     </NavigationContainer>
//   )
// }


const stackDesignHead = {
  title: "Login Or Sign Up", 
          headerTintColor:"white", 
          headerStyle:{ 
            backgroundColor:"skyblue"
            
            },
            headerTitleAlign: 'center'
}
function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator >
        <Stack.Screen 
        name="LoginorSignUp"
        component={LoginOrSignUp} 
        options={stackDesignHead}
        />
        <Stack.Screen 
        name="Login"
        component={login} 
        options={{...stackDesignHead, title:"Login Page"}}
        />
        <Stack.Screen 
        name="SignUp"
        component={SignUp} 
        options={{...stackDesignHead, title:"Sign Up"}}
        />
       </Stack.Navigator>
    </View>
  );
}
export default ()=>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}

