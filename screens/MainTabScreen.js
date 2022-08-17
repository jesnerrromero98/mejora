import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import WebviewScreen from './WebviewScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import SupportScreen from './SupportScreen';


import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
// se importa las pantalla que se va a navegar
import Unidad202Screen from './Vehliviano/Unidad_202'
import Unidad035Screen from './Vehpesado/Unidad_035'

//se crea el stackNavigator de cada pantalla para navegar 
// a las diferentes pantallas
const WebStack= createStackNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Unidad202Stack=createStackNavigator();
const Unidad035Stack=createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: "#1246ff" }}
      
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarColor: '#406fe7',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-car" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Emergencia"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Vehiculo Pesado',
          tabBarColor: '#AB2F74',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-car" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {

        backgroundColor: '#1246ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Vehiculo Liviano',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1246ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
       
      <Unidad202Stack.Screen name="Unidad202" component={Unidad202Screen} options={{
       
       title:'Unidad 202',    
        /* headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer('HomeStackScreen')}></Icon.Button>
              )*/
      }} />

</HomeStack.Navigator>
);


const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1246ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Vehiculos Pesado" component={DetailsScreen} options={{
       /* headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )*/
        }} />

        <Unidad035Stack.Screen name="Unidad035" component={Unidad035Screen} options={{
            title:'Unidad 305',    
              /* headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#EF578E" onPress={() => navigation.openDrawer('HomeStackScreen')}></Icon.Button>
              )*/
         }} />
</DetailsStack.Navigator>
);
