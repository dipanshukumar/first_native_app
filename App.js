/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
      
  render() {
    return (
      <View style={styles.container}>
       <View style={{ flexDirection:'row',backgroundColor:'black',justifyContent:"space-between"}}>
          <View style={{ padding:10 }}><Text style={{ color:'white' }}> Logo</Text></View>
       
        <View style={{ padding:5, alignItems:'flex-end'}}><Button
          onPress={change}
          title="Menu"
          color="#ffea00"
          />
        </View>
      </View>
        <View style={{ flexDirection:'row',backgroundColor: '#ffea00',justifyContent:"space-between",padding:10 }}>
        <Button
          onPress={change}
          title="Home"
          color="#01579b"
          />
          <Button
          onPress={change}
          title="About"
          color="#01579b"
          />
          <Button
          onPress={change}
          title="Services"
          color="#01579b"
          />
          <Button
          onPress={change}
          title="Gallery"
          color="#01579b"
          />
        </View>
        <View style={{ flexDirection:'column',padding:10}}>
            <Text style={{backgroundColor:'#ffff00',color:'black',padding:10,margin:10 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </Text>
            <View style={{padding:10,margin:10,alignItems:'center' }}><Image source={require('./images/img1.jpg')} />
            </View>
            <Text style={{backgroundColor:'blue',color:'white',padding:10,margin:10 }}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </Text>
            <View style={{padding:10,margin:10,alignItems:'center' }}><Image source={require('./images/img2.jpeg')} />
            </View>
        </View>
      </View>
    );
  }
}

let change = ()=>{
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  welcome: {
    textAlign: 'center',
    margin: 10,
    color: '#000',
  },
  
});
