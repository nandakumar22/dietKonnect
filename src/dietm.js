import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,ScrollView, Image } from 'react-native';
import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Grid, Col, Picker, DatePicker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dropdown } from 'react-native-material-dropdown';
class DIETM extends Component {
    static navigationOptions = {  
        title: "Diet plan Management",  
        headerStyle: {  
            backgroundColor:'green'
            
          
           

        },   
        //header TintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
         
           flex:0.8,
            fontSize:20,
            textAlign:'center',
            justifyContent:'center',
           alignItems:'center'
           
        },    
       
    }; 
    constructor(props) {
        super(props); 
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this); 
       
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate }); 
        
    }
   
    render() {
       
        return (
           
          <ScrollView>
            <View style={styles.container}>
               

               
                <Content>
                    <Form>
                    <Label style={{marginLeft:2}}>Picture</Label>
                    <Image
             style={{marginTop:15,flexShrink:1,height:130,width:120,alignSelf:"center"}}
            source={require('../images/idly.jpg')}
            
            /> 

                    <Label style={{marginLeft:2}}>ID</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                  <Label style={{marginLeft:2}}>Code</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>

                  <Label style={{marginLeft:2}}>Name</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
              
                  <Label style={{marginLeft:2}}>Units</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                       
                  <Label style={{marginLeft:2}}>Type</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                  <Label style={{marginLeft:2}}>Calories per serving(cal)</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                  <Label style={{marginLeft:2}}>Protein(g)</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                  <Label style={{marginLeft:2}}>Cholesterol(mg)</Label>
                  <Item regular style={{borderColor:'#6495ed',marginTop:10}} >
                   <Input placeholder='' />
                  </Item>
                  <Button full Regular
                            style={{ marginTop: 15, marginLeft: 5, marginRight: 5 ,backgroundColor:"green",}} >
                            <Text style={{ color: 'black',fontSize:20,alignSelf:"center"  }}>Save</Text>
                        </Button>
                    </Form>
                </Content>
            </View>
            </ScrollView>
        );

    }
}
export default DIETM;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'

    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    logo: {
        width: 300,
        height: 100,
        marginTop: 10,
        marginLeft: 10
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    text1: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 5,
        backgroundColor:'orange',
    },
    text2: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    text3: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        color: 'blue'
    },
    socialIcons: {
        width: 50,
        height: 50,
    },
    socialIconsFacebook: {
        width: 30,
        height: 30,
    },
    socialIconsGoogle: {
        width: 30,
        height: 30,
    },
    text4: {
        fontSize: 15,
        textAlign: 'right',
        marginTop: 5,
        marginBottom: 5,
        color: 'grey'
    },
    gridStyles: {
        margin: 15,
        marginTop: 5,
        backgroundColor: 'white',
        borderRadius: 100
    }
})
