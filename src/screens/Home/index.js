import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header';
import Search from '../../components/searchBar';
import BannerMovies from '../../components/banner';
import Filmes from '../../data/filmes';
import Series from '../../data/series';
import CardMovies from '../../components/cardFilmes';

export default function Home() {
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
            nota = {item.nota}
            
            
            
            ></CardMovies>
      )}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A29',
    alignItems: 'center',
    
  },
});
