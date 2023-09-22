import React from 'react'
import styles from './style'
import {View, Text, Image} from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function Details(){

  const routes = useRoute();
    return(
      <View style={styles.container}>
        <Image style={styles.images} source={require(`../../Img/${routes.params.imagem}`)} />
        <Text style={styles.titulo}> {routes.params.titulo} </Text>
        <Text style={styles.textNota}>{routes.params.nota}</Text>

        <Text style={styles.sinopse}>SINOPSE</Text>
        <Text style={styles.sinopseText}>{routes.params.sinopse}</Text>

      </View> 
    
        )
}