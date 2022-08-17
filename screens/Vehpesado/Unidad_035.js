import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,SafeAreaView,
} from 'react-native';

const Unidad035Screen = () => {


    return(
          <SafeAreaView style = {styles.container}>
          <ScrollView>
        
                 <View style = {styles.textoContenedor}>
                <Image
                    source={require('./.././../assets/343.jpeg')}
                    style = {styles.imagen}
                />
                    <View style = {styles.tituloCont}>
                        <Text style = {styles.titulo}>
                            unidad 204
                        </Text>
                    </View>

                    <View style = {styles.len}>
                        <Text style = {styles.sub}>
                            Asignada:  
                        </Text>
                        <Text style = {styles.sub12}>
                             BOM Juigalpa 
                        </Text>

                        <Text style = {styles.sub2}>
                            Descripcion: 
                        </Text>
                        <Text style = {styles.textt}>
                            Camioneta Mitsubishi, WL200 Baranda
                        </Text>

                        <Text Text style = {styles.sub2}>
                            Consumo:
                        </Text>
                        <Text Text style = {styles.sub12}>
                             25km/galon
                        </Text>
                    </View>

                    <View style = {styles.len}>
                        <Text style = {styles.sub2}>
                          GPS:
                        </Text>
                        <Text style = {styles.sub12}>
                          Si
                        </Text>
                    </View>

                    <View style = {styles.len}>
                        <Text style = {styles.sub2}>
                           Inversion:
                        </Text>
                        <Text style = {styles.sub12}>
                            C$ 1500
                        </Text>
                    </View>

                    <View style = {styles.len}>
                        <Text style = {styles.sub2}>
                        Placa: 
                        </Text>
                        <Text style = {styles.sub12}>
                        M276491
                        </Text>
                    </View>
                  
                    <View style = {styles.len}>
                        <Text style = {styles.sub2}>
                        Trampa:
                        </Text>
                        <Text style = {styles.sub12}>
                         Si
                        </Text>
                    </View>
                    
                    <View style = {styles.len}>
                        
                        <Text style = {styles.sub2}>
                            Seguro: 
                        </Text>

                        <Text style = {styles.sub12}>
                            20/08/2022
                        </Text>
                    </View>
                    
                    <View style = {styles.len}>
                        <Text style = {styles.sub2}>
                            Motor: 
                        </Text>
                        <Text style = {styles.sub12}>
                             4D56UAH2649
                        </Text>
                    </View>

                    <View style = {styles.len}>
                        <Text style = {styles.sub2}>
                            Chasi: 
                        </Text>
                        <Text style = {styles.sub12}>
                            MMBENKL30HH003356
                        </Text>
                        </View>
                    <View style={styles.deviders}/>
                    <View style={styles.line}/>

                    <View style = {styles.len}>
                        <Text style = {styles.sub2}>
                            Candado: 
                        </Text>
                        <Text style = {styles.sub12}>
                             Si
                        </Text>
                    </View>
                    <View style={styles.deviders}/>
                    <View style={styles.line}/>

                    <View style = {styles.len}>
                        <Text style = {styles.textt1}>
                            Buen Estado
                        </Text>
                    </View>
                    <View style={styles.deviders}/>
                    <View style={styles.line}/>
                </View>
               
                
                <View style={styles.deviders}/>
              </ScrollView>            
          </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#1D2021",
        flex: 1,
    },
    image:{
       
        height: 150,
        width: '100%',
        
        borderLeftWidth: 150
    },
    imagen:{
        height: 400,
        width: '100%',
        marginTop:10,
        
        

    },
    
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#98cb40',
    },

    tamaño:{
        width: '64%',
        marginLeft: 5
    },

    sub:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'yellow',
       
    },
    
    sub12:{
        fontSize: 16,
        color: 'white',
        marginHorizontal:80,
        marginTop:-20,
        fontWeight:'cursive',
        fontWeight:'bold'
    },
    sub2:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'yellow',
        marginTop: 15
    },

    textt:{
        fontSize: 15,
        marginTop:-20,
        fontWeight: 'bold',
        color: '#FFFF',
        marginLeft:95,
        textAlign:'justify', 
    },

    textt1:{
        fontSize:  18,
        fontWeight: 'bold',
        color: '#ff0000',
        marginTop: -5,
        marginLeft:120
    },
    tituloCont:{
        alignItems: 'center',
        marginTop: 10
    },

    tituloConte:{
        alignItems:'center',
        marginTop: 5,
        justifyContent: 'flex-start',
        flexDirection:'row',
        width: '100%'
    },

    textoContenedor:{
        marginHorizontal: 10
    },

    line:{
        height: 1,
        backgroundColor: "transparent",
        marginVertical: 5,
    },
    devider:{
        height:2
    },

    deviders:{
        height: 3,
    },
    len:{
        marginHorizontal: 10,
        marginTop: 5
    }
})


export default Unidad035Screen;