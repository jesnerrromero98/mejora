import React, { Component } from 'react';
import  { Image, Linking , StyleSheet,Text }
from 'react-native';

import { Container, Button, Icon, Header, Content, Item, Input } from 'native-base';

export default class SupportScreen extends Component {
  render() {
    return (
      <Container style = {styles.fondo}>
        <Text style = {styles.separador}></Text>
        <Text style = {styles.tit2}></Text>
        
        <Content >
          <Item rounded style = {styles.columna} >
            <Input style = {styles.ti1} placeholder='Nombre'/>
          </Item>
          <Text style = {styles.separador}></Text>
          <Item rounded style = {styles.columna} >
            <Input style = {styles.ti1} placeholder='Apellidos'/>
          </Item>
          <Text style = {styles.separador}></Text>
          <Item rounded style = {styles.columna} >
            <Input style = {styles.ti1} placeholder='Numero de celular'/>
          </Item>
          <Text style = {styles.separador}></Text>
          <Item rounded style = {styles.columna} >
            <Input style = {styles.ti1} placeholder='Fecha de Cita'/>
          </Item>
          <Text style = {styles.separador}></Text>
          <Item rounded style = {styles.columna} >
            <Input style = {styles.ti1} placeholder='Procedencia'/>
          </Item>
          <Text style = {styles.separador}></Text>
          <Item rounded style = {styles.columna} >
            <Input style = {styles.ti1} placeholder='Cedula'/>
          </Item>

          <Button  style = {styles.But} >
             <Text style = {styles.icon}>Reservar</Text>
          </Button>
                 

        </Content>
      </Container>
    

    
    );
  }
}
const styles = StyleSheet.create({
container:{
    backgroundColor: '#1D2021',
    flexDirection: 'column',
    alignItems: 'center',
  
},
fondo:{
  backgroundColor: '#0D0D0D',
},
But:{
  width: 200,
  height: 55,
  marginTop:50,
  marginLeft:75,
  borderRadius:15,
  backgroundColor:"#90168C"
},
ti1:{
  fontSize: 14,
  color: '#ffffff',
   marginTop:1,
  marginHorizontal:10,
},

icon:{
  height: 79,
  marginTop: 50,
  marginLeft:60,
  color: "#ffffff",
  fontSize:20,
  fontWeight: 'bold',
},
columna:{
  backgroundColor: '#1D2021',
  },

tit2:{
  fontSize: 16,
  fontWeight: 'bold',
  marginTop:5,
  marginStart:-10,
  color: '#ffffff',
  textAlign:'center'
},
separador:{
    width:10
  }, 
 });