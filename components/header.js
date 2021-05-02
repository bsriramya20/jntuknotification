import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { NavigationContainer, DrawerActions } from '@react-navigation/native';




export default function Header({navigation,title}) { 
     openDrawer = ()=>{
        // console.log(navigation)
            navigation.dispatch(DrawerActions.openDrawer())
    };
    return (
        <View style={styles.header}>
          
             
        <Text style={styles.title}>{title}</Text>
        
        
        <View style={styles.item1}>
        <SimpleLineIcons name="menu" size={32} color="black" onPress={openDrawer} />
          </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    image:{width:50,height:50,resizeMode:'cover'},
    header: {
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#eee'
        
    },
    title: {
        paddingTop: 26,
        paddingBottom: 14,
        paddingLeft: 25,
        color:  '#72b626',
        fontSize: 24,
        fontWeight: '900',
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    item: {
        justifyContent: 'flex-end',
        padding:20,
   },
   item1: {
       padding:20,
       marginTop:10,
       justifyContent: 'flex-start',
  }
});
