import React from 'react'
import styles from './style'
import {Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import Details from '../screens/Details';

export default function Routes(){

    const stack = createStackNavigator();

    return(
        
        <NavigationContainer>
            
            <stack.Navigator>
                <stack.Screen name ='home' component ={Home} options = {
                   {
                       headerShown:false,
                   } 
                }   />

                
                <stack.Screen name ='details' component = {Details} options = {
                   {
                   
                    title: "",
                    headerTransparent: true,
        
                      headerTintColor: '#ffff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        borderRadius: 20, 
                        padding: 10 
  }    
                   } 
                }   />

            </stack.Navigator>
        </NavigationContainer>

    );
}