import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header';
import Search from '../../components/searchBar';
import React,{useState, useEffect} from 'react';
import BannerMovies from '../../components/banner';
import Filmes from '../../data/filmes';
import Series from '../../data/series';
import CardMovies from '../../components/cardFilmes';
import styles from './style';

export default function Home() {
  
  const [movies,setMovies] = useState([]);

  useEffect(()=>{

    async function buscarFilmes(){
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=24d9fd344f34a9bf4fcdbf5b027319b7&language=pt-BR');
      const data = await response.json();
      console.log(data);
      console.log(data.results);
      setMovies(data.results);
    }

    buscarFilmes();

  },[])

  return (
    <View style={styles.container}>
      <Header></Header>
      <Search></Search>
      <BannerMovies></BannerMovies>
      <View style={{width:'90%'}}>
      <FlatList
          showsHorizontalScrollIndicator = {false}
          horizontal = {true}
          data = {Filmes}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => (

            <CardMovies
            titulo = {item.nome}
            imagem = {item.imagem}
            nota = {item.nota}
            sinopse={item.sinopse}
            
            
            
            ></CardMovies>
      )}
      />
      <FlatList
          showsHorizontalScrollIndicator = {false}
          horizontal = {true}
          data = {Series}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => (

            <CardMovies
            titulo = {item.nome}
            imagem = {item.imagem}
            nota = {item.nota} />
      )}
      />
    </View>
    </View>
  );
};
