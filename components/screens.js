
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';



import Banners from './banners';
import About from './about';
import Main from './main';
import Contact from './contact';
import Header from './header';
import Qualification from './qualification';


  

export default  function Screens({navigation,title}) {
  
  // console.log(navigation)

  return (
    <View>
    {/* <Header navigation={navigation} title={title}></Header> */}
    <ScrollView >
        <View >
           
            </View>
      </ScrollView>
      </View>
    
  )

}

const styles = StyleSheet.create({
  container: {marginTop:50}
  
});
