import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const {width} = Dimensions.get('window');


const images= [
      'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'
    ];

    const highlightText = string =>
      string.split(' ').map((word, i) => (
        <Text key={i}>
          <Text style={styles.highlightText}>{word} </Text>
        </Text>
      ));

export default class Contact extends React.Component {

    
  
  render(){
  return (
    <ScrollView>
    <View style={styles.container} >
        
        <Text h1 style={styles.header}>Contact us</Text> 
        
        
        
        <Card style={styles.cardStyle}>
        <EvilIcons name="location" size={70} color="#50d8af" style={{textAlign:'center'}} />
        <Text style={styles.header3}>ADDRESS</Text>
        <Text style={styles.paragraph}> Venkateswara Swamy Temple Road, Venkat Nagar, Kakinada.</Text>

        <Feather name="phone" size={50} color="#50d8af" style={{textAlign:'center'}} />
        <Text style={styles.header3}>PHONE NUMBER</Text>
        <Text style={styles.paragraph}>  +91 9491005222, 333, 444</Text>

        <Fontisto name="email" size={50} color="#50d8af" style={{textAlign:'center'}}  />
        <Text style={styles.header3}>EMAIL</Text>
        <Text style={styles.paragraph}>srivyvidya@gmail.com</Text>
       
        
     </Card>
     <View style={styles.copyRight}>
         <Text>@ Copyright {highlightText('Srivyvidya')}. All Rights Reserved</Text>
         <Text>Designed by Kasitechnologies (8712906926) </Text>
     </View>

      </View>
      </ScrollView>
  )
      }
}

const styles = StyleSheet.create({
  container: {marginTop:50,
        justifyContent: 'center',
        alignItems: 'center',},
  header:{
      fontSize:32,
      color:"#0c2e8a",
      fontWeight:'bold',
      marginTop:5,
      marginBottom:10,
      textAlign:'center'
  },
  paragraph:{
      fontSize:16,
      lineHeight:25,
      padding:20,
      color:'#999',
      textAlign:'center'
      

  },
  header3:{
    fontSize:20,
    color:'#999',
    fontWeight:'bold',
    marginTop:8,
    textAlign:'center'
},

  cardStyle:{
    width
  },
  cardView:{
      textAlign:'center',
      backgroundColor:'#50d8af',
      padding:10
  },
  copyRight:{
      marginTop:30,
      backgroundColor:'#f2f5f8',
      padding:30
  },
  highlightText:{
      fontWeight:'bold'
  }
  
});