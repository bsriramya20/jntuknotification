import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView, Dimensions,Button } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import Banners from './components/banners';
import About from './components/about';
import Main from './components/main';
import Contact from './components/contact';
import Screens from './components/screens';
import Header from './components/header';
import Qualification from './components/qualification';
import Experience from './components/experience';
import Research from './components/research';





    const Stack = createStackNavigator();

    const Drawer = createDrawerNavigator();

    const HomeNav = ()=>{
      return(
        <Stack.Navigator  screenOptions={{
        }} >
        
        <Stack.Screen name="HOME" component={Main} options={({navigation})=> ({
          header: ()=> <Header navigation={navigation} title='' />
        })}/>
       </Stack.Navigator>
      )
    }

    const AboutNav = ()=>{
      
      return(
        <Stack.Navigator  screenOptions={{
        }} >
        
        <Stack.Screen name=" NOTIFICATIONS" component={About} options={({navigation})=> ({
          header: ()=> <Header navigation={navigation} title='NOTIFICATIONS' />
        })}/>
       </Stack.Navigator>
      )
    }

    const QualificationNav = ()=>{
      return(
        <Stack.Navigator  screenOptions={{
        }} >
        
        <Stack.Screen name="LATEST HAPPENINGS" component={Qualification} options={({navigation})=> ({
          header: ()=> <Header navigation={navigation} title='LATEST HAPPENINGS' />
        })}/>
       </Stack.Navigator>
      )
    }
    const ExperienceNav = ()=>{
      return(
        <Stack.Navigator  screenOptions={{
        }} >
        
        <Stack.Screen name="STUDENT CORNER" component={Experience} options={({navigation})=> ({
          header: ()=> <Header navigation={navigation} title='STUDENT CORNER' />
        })}/>
       </Stack.Navigator>
      )
    }

    const ResearchNav = ()=>{
      return(
        <Stack.Navigator  screenOptions={{
        }} >
        
        <Stack.Screen name="RESULTS" component={Research} options={({navigation})=> ({
          header: ()=> <Header navigation={navigation} title='RESULTS' />
        })}/>
       </Stack.Navigator>
      )
    }

    const PublicationNav = ()=>{
      return(
        <Stack.Navigator  screenOptions={{
        }} >
        
        <Stack.Screen name="CONTACTS " component={Banners} options={({navigation})=> ({
          header: ()=> <Header navigation={navigation} title='CONTACTS' />
        })}/>
       </Stack.Navigator>
      )
    }

  
  



export default class App extends React.Component {
  
  render(){
    
  return (

    <NavigationContainer>
    <Drawer.Navigator initialRouteName="HOME">
          <Drawer.Screen name="HOME" component={HomeNav} 
          options={{ drawerIcon: config=><FontAwesome name="home" size={24} color="#666" /> }}  />
          <Drawer.Screen name="NOTIFICATIONS" component={AboutNav} 
          options={{ drawerIcon: config=><FontAwesome name="book" size={24} color="#666"  /> }} />
          {/* options={{ drawerIcon: config=><FontAwesome name="user" size={24} color="#666"  /> }}  /> */}
          <Drawer.Screen name="LATEST HAPPENINGS" component={QualificationNav}
          options={{ drawerIcon: config=><FontAwesome name="book" size={24} color="#666"  /> }} />
            {/* options={{ drawerIcon: config=><FontAwesome name="graduation-cap" size={22} color="#666" /> }}  /> */}
          <Drawer.Screen name="STUDENT CORNER" component={ExperienceNav}
           options={{ drawerIcon: config=><FontAwesome name="briefcase" size={24} color="#666"  /> }}  />
          <Drawer.Screen name="RESULTS" component={ResearchNav} 
           options={{ drawerIcon: config=><FontAwesome name="graduation-cap" size={24} color="#666"  /> }}  />
          {/* <Drawer.Screen name="AWARDS & HONORS" component={HomeNav}
          options={{ drawerIcon: config=><FontAwesome name="trophy" size={24} color="#666"  /> }} /> */}
          <Drawer.Screen name="CONTACTS" component={PublicationNav}
          options={{ drawerIcon: config=><FontAwesome name="book" size={24} color="#666"  /> }} />
       </Drawer.Navigator>
   </NavigationContainer>
  )
      }
}

const styles = StyleSheet.create({
  container: {marginTop:50}
  
});
