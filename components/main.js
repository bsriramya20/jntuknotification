
import React from 'react';
import { StyleSheet, View,Text, ScrollView,TouchableHighlight,Button,Image } from 'react-native';





export default  function Screens({navigation,title}) {
  


  return (
    
    <ScrollView style={styles.container} >
      <Image style={styles.profileImgContainer}
            source={require('../assets/download-removebg-preview.png')}
          />
          <Text style={styles.textHead}>Jawaharlal Nehru Technological University ,Kakinada</Text>
      
      <View >
      
      <TouchableHighlight 
                style ={{
                    padding:10,
                    borderRadius:30,
                    backgroundColor : "#72b626",
                    marginLeft :50,
                    marginRight:50,
                    marginTop :40
                    
                }}>
            <Button            
            title="HOME"
            color="white"
            accessibilityLabel="Learn more home this button"
            onPress={()=> navigation.navigate('HOME')}
          /> 
          </TouchableHighlight> 
      </View>
      <View >
      
      <TouchableHighlight 
                style ={{
                    padding:10,
                    borderRadius:30,
                    backgroundColor : "#72b626",
                    marginLeft :50,
                    marginRight:50,
                    marginTop :30
                    
                }}>
            <Button            
            title="NOTIFICATIONS"
            color="white"
            accessibilityLabel="Learn more home this button"
            onPress={()=> navigation.navigate('NOTIFICATIONS')}
          /> 
          </TouchableHighlight> 
      </View>
      <View >
      
      <TouchableHighlight 
                style ={{
                    padding:10,
                    borderRadius:30,
                    backgroundColor : "#72b626",
                    marginLeft :50,
                    marginRight:50,
                    marginTop :30
                    
                }}>
            <Button            
            title="LATEST HAPPENINGS"
            color="white"
            accessibilityLabel="Learn more home this button"
            onPress={()=> navigation.navigate('LATEST HAPPENINGS')}
          /> 
          </TouchableHighlight> 
      </View>
      <View >
      
      <TouchableHighlight 
                style ={{
                    padding:10,
                    borderRadius:30,
                    backgroundColor : "#72b626",
                    marginLeft :50,
                    marginRight:50,
                    marginTop :30
                    
                }}>
            <Button            
            title="STUDENT CORNER"
            color="white"
            accessibilityLabel="Learn more home this button"
            onPress={()=> navigation.navigate('STUDENT CORNER')}
          /> 
          </TouchableHighlight> 
      </View>
      <View >
      
      <TouchableHighlight 
                style ={{
                    padding:10,
                    borderRadius:30,
                    backgroundColor : "#72b626",
                    marginLeft :50,
                    marginRight:50,
                    marginTop :30
                    
                }}>
            <Button            
            title="RESULTS"
            color="white"
            accessibilityLabel="Learn more home this button"
            onPress={()=> navigation.navigate('RESULTS')}
          /> 
          </TouchableHighlight> 
      </View>
      <View >
      
      <TouchableHighlight 
                style ={{
                    padding:10,
                    borderRadius:30,
                    backgroundColor : "#72b626",
                    marginLeft :50,
                    marginRight:50,
                    marginTop :30
                    
                }}>
            <Button            
            title="CONTACTS"
            color="white"
            accessibilityLabel="Learn more home this button"
            onPress={()=> navigation.navigate('CONTACTS')}
          /> 
          </TouchableHighlight> 
      </View>
      


      
      </ScrollView>
     
    
  )

}

const styles = StyleSheet.create({
  container: {padding:20,textAlign:'justify'},
  textHead:{fontWeight:'bold',fontSize:20,color:'#666',paddingLeft:20,marginBottom:15,marginLeft:5,marginTop:10},
  textp1:{fontSize:15,color:'#666',marginTop:50,textAlign:'justify',lineHeight:28},
  textp2:{fontSize:16,marginTop:50,textAlign:'justify',lineHeight:28},
  buttonStyle:{backgroundColor:'#72b626',padding:20},
  profileImgContainer: {
    marginLeft: 150,
    height: 80,
    width: 80,
    borderRadius: 120
  }
  
});