import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import {useQuery} from 'react-query';
import {fetchMovies} from '../TMDb_API/api';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addMovie, removeMovie} from '../Redux/reducers';

const MovieList = () => {
  const colorScheme = useColorScheme() === 'dark'
  const {data: movies, isLoading} = useQuery('movies', fetchMovies);
  const dispatch = useDispatch();
  const shortlistedMovies = useSelector(state => state.shortlist);

  if (isLoading) return <Text>Loading...</Text>;

  const isShortlisted = movie =>
    shortlistedMovies.some(shortlisted => shortlisted.id === movie.id);

  const handleShortlist = movie => {
    try {
      if (isShortlisted(movie)) {
        dispatch(removeMovie(movie));
      } else {
        dispatch(addMovie(movie));
      }
    } catch (error) {
      console.log('Error in MovieList : ', error);
    }
  };

  return (
    <ImageBackground
      source={require('/Users/jainishpathak/Desktop/React-Native/CinePick/Components/image.jpg')}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{padding: 10}}>
            <Text style={colorScheme ? styles.dark : styles.white}>{item.title}</Text>
            <TouchableOpacity
              title={
                isShortlisted(item) ? 'Remove from Shortlist' : 'Shortlist'
              }
              onPress={() => handleShortlist(item)}
              style={styles.btnCont}>
              <Text style={styles.btnText1}>
                {isShortlisted(item) ? 'Remove from Shortlist' : 'Shortlist'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </ImageBackground>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  btnCont: {
    backgroundColor: '#5178b5',
    width: '30%',
    paddingVertical: 5,
    borderRadius: 8,
    elevation: 14,
    alignSelf: 'flex-end',
    shadowColor: '#2563eb',
    marginLeft: 95,
    marginBottom: 10,
    marginTop: 10,
  },
  btnText: {
    textAlign: 'left',
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
  },
  btnText1: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 10,
    fontFamily: 'Montserrat-SemiBold',
  },
  white:{
    color:'white',
    fontSize:20,
    fontWeight: 'bold',
    fontFamily:'TimesNewRoman',
    textAlign: 'left',
    marginTop: 3,
  },
  dark:{
    color:'white',
    fontSize:20,
    fontWeight: 'bold',
    fontFamily:'TimesNewRoman',
    textAlign: 'left',
    marginTop: 3,
  },
});
