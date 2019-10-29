// import React, { Component } from 'react';
 
// import { Platform, StyleSheet, View, Text, Image } from 'react-native';
// import {  TextInput, TouchableOpacity, Alert } from 'react-native';
// import { Container, Header, Content, Form, Item, Input, Label, Button, Grid, Col } from 'native-base';
// import { Actions } from 'react-native-router-flux';
// const signIn = () => {
  
//   Actions.dashB()
// };
// const signUphere = () => {
//   Actions.register()
// };
// export default class Splash extends Component<{}>
// {
 
//   constructor(){
 
//     super();
 
//     this.state={
 
//       isVisible : true,
 
//     }
 
//   }
 
//   Hide_Splash_Screen=()=>{
 
//     this.setState({ 
//       isVisible : false 
 
//     });
 
//   }
 
//   componentDidMount(){
 
//     var that = this;
 
//     setTimeout(function(){
 
//       that.Hide_Splash_Screen();
 
//     }, 2000);
 
 
  
//   }
 
//     render()
//     {
//         let Splash_Screen = (
 
//             <View style={styles.SplashScreen_RootView}>
 
//                 <View style={styles.SplashScreen_ChildView}>
 
//                     {/* Put all your components Image and Text here inside Child view which you want to show in Splash Screen. */}
 
//                     <Image source={{uri:'data:image/jpeg;base64,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'}}
//                     style={{width:'100%', height: '100%', resizeMode: 'contain'}} />
 
//                 </View>
            
//             </View> )
 
//         return(
 
//             // <View style = { styles.MainContainer }>
 
               
//  <View style={styles.container}>
//               <Image resizeMode="contain" style={styles.logo} source={require('../images/sunkpo.jpg')} />
              
//               <Text style={styles.text1}>MyDiet</Text>
             
//               <Content>
//                   <Form>
//                   <Item stackedLabel last>
//                             <Label>Username</Label>
//                             <Input  placeholder="Enter your username" style={{ opacity:0.6, }} />
//                         </Item>
//                         <Item stackedLabel last>
//                             <Label>Password</Label>
//                             <Input placeholder="Enter your password" style={{opacity:0.6  }} />
//                         </Item>
//                       <Button full regular
//                          style={{ marginTop: 30, marginLeft: 5, marginRight: 5,backgroundColor:'#ff8c00' }} onPress = { signIn }>
//                             <Text style={{ color: 'white',alignSelf:"center",fontSize:20 }}>Sign-In</Text>
//                         </Button>
//                         <Text style={styles.text2}>New User? <Text onPress = { signUphere} style={styles.text3}>Sign Up Here</Text></Text>
//                         <Text style={styles.text2}>or</Text>
//                         <Grid>
                    
//                         <Col size={60}>
                                
//                                     <Image resizeMode="contain" style={styles.socialIconsGoogle} source={require('../images/gg.png')} />
                               
//                             </Col>
//                             <Col size={60}>
                               
//                                     <Image resizeMode="contain" style={styles.socialIconsFacebook} source={require('../images/fb.png')} />
                             
//                             </Col>
//                             <Col size={60}>
                                
//                                     <Image resizeMode="contain" style={styles.socialIcons} source={require('../images/tw.png')} />
                               
//                             </Col>
                            
                            
//                         </Grid>
                      
//                   </Form>
//               </Content>
//           {/* </View> */}
//                 {
//                   (this.state.isVisible === true) ? Splash_Screen : null
//                 }
            
 
//             </View>
            
//         );
//     }
// }
 
// const styles = StyleSheet.create(
// {
//     // MainContainer:
//     // {
//     //     flex: 1,
//     //     justifyContent: 'center',
//     //     alignItems: 'center',
//     //     paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
//     // },
 
//     SplashScreen_RootView:
//     {
//         justifyContent: 'center',
//         flex:1,
//         margin: 10,
//         position: 'absolute',
//         width: '100%',
//         height: '100%',
        
//     },
 
//     SplashScreen_ChildView:
//     {
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#00008b',
//         flex:1,
       
//     },
 
//     TouchableOpacity_Style:{
 
//         width:25, 
//         height: 25, 
//         top:9, 
//         right:9, 
//         position: 'absolute'
 
//     },
//     container: {
//       flex: 1,
//       padding: 20,
//       backgroundColor: 'white'

//   },
//   input: {
//       height: 40,
//       backgroundColor: 'rgba(225,225,225,0.2)',
//       marginBottom: 10,
//       color: '#fff'
//   },
//   buttonContainer: {
//       backgroundColor: '#ff7f50',
//       paddingVertical: 15
//   },
//   buttonText: {
//       color: '#fff',
//       textAlign: 'center',
//       fontWeight: '700'
//   },
//   logo: {
//       width: 300,
//       height: 100,
//       marginTop: 10,
//       marginLeft: 10
//   },
//   loginContainer: {
//       alignItems: 'center',
//       flexGrow: 1,
//       justifyContent: 'center'
//   },
//   text1: {
//       fontSize: 20,
//       fontWeight: "bold",
//       textAlign: 'center',
//       marginBottom: 5,
//       justifyContent: 'center'
//   },
//   text2: {
//       fontSize: 15,
//       textAlign: 'center',
//       marginTop: 20,
//       marginBottom: 15

//   },
//   text3: {
//       fontSize: 15,
//       textAlign: 'center',
//       marginTop: 10,
//       marginBottom: 10,
//       color: 'blue'
//   },
//   socialIcons: {
//       width: 30,
//       height: 30,
//       marginLeft:40,
//   },
//   socialIconsFacebook: {
//       width: 30,
//       height: 30,
//      alignSelf:'center',
//   },
//   socialIconsGoogle: {
//       width: 30,
//       height: 30,
//       marginLeft:30,
//   },
//   text4: {
//       fontSize: 15,
//       textAlign: 'right',
//       marginTop: 5,
//       marginBottom: 5,
//       color: 'grey'
//   },
//   gridStyles:{
//       margin: 15,
//       marginTop:5, 
//       backgroundColor: 'white', 
//       borderRadius: 100
//   }
// });
