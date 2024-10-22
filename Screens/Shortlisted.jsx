import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList, View, Text} from 'react-native';

const ShortlistedMovies = () => {
  const shortlistedMovies = useSelector(state => state.shortlist);

  if (shortlistedMovies.length === 0)
    return <Text>No shortlisted movies.</Text>;

  return (
    <FlatList
      data={shortlistedMovies}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={{padding: 10}}>
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
};

export default ShortlistedMovies;
