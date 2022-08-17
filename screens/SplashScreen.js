import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#0D0D0D' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/aguila.png')}
            style={styles.logo}
            
            />
        </View>
        <Text style={[styles.title2, {
                color: 'black'
            }]}>Sector Oriente  </Text>
        
            <Text style={[styles.title, {
                color: 'white'
            }]}></Text>

            <Text style={styles.text}></Text>
            
        

            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <LinearGradient
                    colors={['#406FE7', '#406FE7']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Inicio</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="black"
                        size={5}
                       
                    />
                </LinearGradient>
               
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
            
            {/* <LinearGradient
                    colors={['#AB2F74', '#AB2F74']}
                    style={styles.signIn2}
                >
                    <Text style={styles.textSign}>Regitrarse</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="black"
                        size={5}
                       
                    />
                </LinearGradient>*/}
                </TouchableOpacity> 
            </View>
        
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.27;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#BFB1B1'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#1D2021',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      paddingVertical: 200,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 20,
      fontWeight: 'bold',
      justifyContent:'center',
      textAlign:'center',
      marginEnd:0,
      marginTop:10
  },
  title2: {
    color: '#05375a',
    fontSize: 22,
    fontWeight: 'bold',
    justifyContent:'center',
    textAlign:'center',
    marginEnd:0,
    marginTop:-90,
    
},
  text: {
      color: 'grey',
      marginTop:10
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 10
  },
  signIn: {
      width: 333,
      height: 57,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
      marginBottom:230,
      marginRight:27,
    
  },
  signIn2: {
    width: 333,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    marginBottom:150,
    marginRight:27,
  
},
  textSign: {
      color: 'white',
      fontWeight: 'bold',
      fontSize:18
  }
});

