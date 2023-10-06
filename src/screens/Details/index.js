import React from 'react';
import styles from './style';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function Details() {
  const routes = useRoute();

  return (
    <View style={styles.container}>
      <Image style={styles.images} source={require(`../../Img/${routes.params.imagem}`)} />

      <View style={styles.notaContainer}>
        <View style={styles.starsContainer}>
          <FontAwesome name="star" size={20} color="#f1af09"/>
          <FontAwesome name="star" size={20} color="#f1af09" />
          <FontAwesome name="star" size={20} color="#f1af09" />
          <FontAwesome name="star" size={20} color="#f1af09" />
          <FontAwesome name="star" size={20} color="#f1af09" />
          <FontAwesome name="star" size={20} color="#f1af09"/>
          <FontAwesome name="star" size={20} color="#f1af09" />
          <FontAwesome name="star" size={20} color="#f1af09" />
          <FontAwesome name="star" size={20} color="#f1af09" />
          <FontAwesome name="star" size={20} color="#f1af09" />
        </View>
        <Text style={styles.textNota}>{routes.params.nota}</Text>
      </View>

      <Text style={styles.sinopse}>SINOPSE</Text>
      <Text style={styles.sinopseText}>{routes.params.sinopse}</Text>
    </View>
  );
}
