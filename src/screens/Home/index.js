
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import BannerMovies from '../../components/bannerFilmes';
import CardMovies from '../../components/cardFilmes';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import { useEffect, useState } from 'react';
import Filmes from '../../data/movies'

export default function App() {

  const [movies,setMovies] = useState([]);

  useEffect(()=>{

    async function buscarFilmes(){
      
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=bda3ce5d8a8a51b1badbff96619f5a74&language=pt-BR');
      const data = await response.json();
      console.log(data.results);
      setMovies(data.results);
    }

    buscarFilmes();

  },{})


  return (
    <View style={styles.container}>
     <Header></Header>

     <SearchBar></SearchBar>

     <BannerMovies></BannerMovies>
     
    
     <View style = {{width :"90%"}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Filmes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              
              <CardMovies
                titulo={item.nome}
                imagem={item.imagem}
                nota={item.nota}
                sinopse={item.sinopse}
              />
            )}
          />
        </View>
    
  

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:'center'
    
    
  },
});
