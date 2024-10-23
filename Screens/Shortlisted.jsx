import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList, View, Text, ImageBackground, StyleSheet, Image, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const ShortlistedMovies = () => {
  const shortlistedMovies = useSelector(state => state.shortlist);
  const colorScheme = useColorScheme() === 'dark'

  if (shortlistedMovies.length === 0)
    return <Text>No shortlisted movies.</Text>;

  return (
    <ImageBackground
      source={require('/Users/jainishpathak/Desktop/React-Native/CinePick/Components/image.jpg')}>
      <FlatList
        data={shortlistedMovies}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={{padding: 10}}>
            <Text style={colorScheme ? styles.dark : styles.white}>{item.title}</Text>
          </View>
        )}
      />
    </ImageBackground>
  );
};

export default ShortlistedMovies;

const styles = StyleSheet.create({
  btnText: {
    textAlign: 'left',
    color: '#ffffff',
    fontSize: 20,
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
})
