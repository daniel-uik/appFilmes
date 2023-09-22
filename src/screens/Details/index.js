import React from 'react'
import { View, Text, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import styles from './style';

export default function Details(){

    const routes = useRoute();
    return(
        <View>
            <Image style={styles.imagem} source = {require (`../../Img/${routes.params.imagem}`)} />
            <Text> {routes.params.titulo} </Text>
            <Text> {routes.params.nota} </Text>
            <Text> {routes.params.descricao} </Text>
        </View>
    )
}

