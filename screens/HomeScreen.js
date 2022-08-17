import React from 'react';
import {View, SafeAreaView,Image, StyleSheet, ScrollView, Dimensions, ImageBackground} from 'react-native';
//import Encabezado from './../component/encabezado';
import {useNavigation} from '@react-navigation/native';
import Unidad202Screen from '././Vehliviano/Unidad_202';
import {
  Avatar,
  Title,
  Card,
  Paragraph,
  Button,
  IconButton,
  Caption,
  Icon,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  
  return(
    <SafeAreaView style={style.container}>
             
     <ScrollView>
      <View>
        
            <View style={style.heder}>
              <Card style={style.card}>
                <Image
                  source={require('././../assets/343.jpeg')}
                  style = {style.imagen}  
                /> 

                <Title style={style.cardTitle} >Unidad 204</Title>
                <Text style={style.cardText}>Buen Estado</Text>
                <Text style={style.cardText1}>Bom San Migelito</Text>
              
                <Button
                  style={style.btnSerrarcesion}
                  onPress = {() => navigation.navigate('Unidad202')}>
                  <Text style={style.cardTitle1}>Ver Mas..</Text></Button>               
                  <View style={style.div1}/>
              </Card>

              <Card style={style.card}>
                <Image
                  source={require('././../assets/343.jpeg')}
                  style = {style.imagen}  
                /> 

                <Title style={style.cardTitle} >Unidad 203</Title>
                <Text  style={style.cardText}>Buen Estado</Text>
                <Text style={style.cardText1}>MyD</Text>

                <Button
                  style={style.btnSerrarcesion}
                  onPress = {() => navigation.navigate('Unidad202')}>
                  <Text style={style.cardTitle1}>Ver Mas..</Text></Button>
                  <View style={style.div1}/>             
              </Card>
            
              <Card style={style.card}>
                <Image
                  source={require('././../assets/343.jpeg')}
                  style = {style.imagen}  
                /> 

                <Title style={style.cardTitle} >Unidad 80</Title>
                <Text style={style.cardText}>Buen Estado</Text>
                <Text style={style.cardText1}>Bom Adicional</Text>
                <Button
                  style={style.btnSerrarcesion}
                  onPress = {() => navigation.navigate('Unidad202')}>
                  <Text style={style.cardTitle1}>Ver Mas..</Text></Button>
                <View style={style.div1}/>
 

              </Card>

              <Card style={style.card}>
                <Image
                  source={require('././../assets/343.jpeg')}
                  style = {style.imagen}  
                /> 

                <Title style={style.cardTitle} >Unidad 55</Title>
                <Text style={style.cardText}>Buen Estado</Text>
                <Text style={style.cardText1}>Bom Santo Tomas</Text>
                <Button
                  style={style.btnSerrarcesion}
                  onPress = {() => navigation.navigate('Unidad202')}>
                  <Text style={style.cardTitle1}>Ver Mas..</Text></Button>
                  <View style={style.div1}/>
  
              </Card>

              <Card style={style.card}>
                <Image
                  source={require('././../assets/343.jpeg')}
                  style = {style.imagen}  
                /> 

                <Text style={style.cardTitle} >Unidad 343</Text>
                <Text style={style.cardText}>Buen Estado</Text>
                <Text style={style.cardText1}>Bom Juigalpa</Text>
                <Button
                    style={style.btnSerrarcesion}
                    onPress = {() => navigation.navigate('Unidad202')}>
                    <Text style={style.cardTitle1}>Ver Mas..</Text>
                  </Button>
                  <View style={style.div1}/>
 
             </Card>

              
              
              <View style={style.div}/>
            
          </View>

      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;

const style = StyleSheet.create({
  container:{
   flex:1,
    backgroundColor:'#BFB1B1'
    
  },
    heder:{
      marginTop:-1
      },

   hederTitle:{
    alignItems:'center',
    fontWeight: 'bold',
    color:'#3A3940',
    fontSize: 20,
    
  },

   cardTitle: {
    fontSize: 20,
    marginLeft: 140,
    marginTop: -100,
    alignItems: 'center',
    fontFamily:"Serif ",
    color:'#fafafa',
    
  },
  
  cardTitle1: {
    fontSize: 16,
    marginLeft: 0,
    marginTop: 90,
    alignItems: 'center',
    color:'#ffffff',
    
  },
  cardText:{
    color: "white",
   
    fontSize:15,
    marginTop:-53,
    marginLeft:140,
    lineHeight: 120,
  },
  
  cardText1:{
    color: "yellow",
    
    fontSize:15,
    marginTop:-98,
    marginLeft:140,
    lineHeight: 120,
  },

  card:{
    marginTop:15,
    backgroundColor:'#406FE7', 
    width: '95%',
    marginHorizontal:10,
    paddingHorizontal:15,
    borderRadius:30
  },

  btnSerrarcesion:{
    backgroundColor:"transparent",
    marginTop: -45,
    height:40,
    width:125, 
    borderRadius:30,
    marginLeft:125
  },

  btnSerrarcesionText:{
    color:'#E6FFFD',
    alignContent:'space-around',
    fontWeight:'bold'
  },
  imagen:{
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 15,
    borderWidth:1,
    borderColor:"white",
    marginLeft: 5,
    marginTop: 18
},

div:{
  height: 20
},

div1:{
  height: 10
},

});
