import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useQuery} from 'react-query';
import {fetchMovies} from '../TMDb_API/api';
import {FlatList, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addMovie, removeMovie } from '../Redux/reducers';

const MovieList = () => {
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
      console.log("Error in MovieList : ",error);
    }
  };

  return (
    <FlatList
      data={movies}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={{padding: 10}}>
          <Text>{item.title}</Text>
          <TouchableOpacity
            title={isShortlisted(item) ? 'Remove from Shortlist' : 'Shortlist'}
            onPress={() => handleShortlist(item)}
            style={styles.btnCont}>
              <Text style={styles.btnText}>{isShortlisted(item) ? 'Remove from Shortlist' : 'Shortlist'}</Text>
            </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default MovieList;

const styles = StyleSheet.create({
  btnCont: {
    backgroundColor: '#2563eb',
    width: '60%',
    paddingVertical: 5,
    borderRadius: 8,
    elevation: 14,
    shadowColor: '#2563eb',
    marginLeft: 75,
    marginBottom: 10,
    marginTop: 10,
  },
  btnText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 10,
    fontFamily: 'Montserrat-SemiBold',
  },
});
