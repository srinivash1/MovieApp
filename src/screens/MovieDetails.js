import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MovieDetails = () => {
  const route = useRoute();
  const { movieId } = route.params;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movieId.backdrop_path}`,
        }}
        style={styles.cardContainer}
        resizeMode="cover"
        overlayColor="rgba(10, 0, 0, 2.5)" 
      />
      <View>
        <Text style={styles.titleContainer}>
            {movieId.original_title}
        </Text>
        <Text style={styles.movieOverView}>
            {movieId.overview}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  cardContainer: {
    height: 300,
    width: 390,
    borderRadius: 8,
  },
  titleContainer: {
    fontSize :20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center"
  },
  movieOverView: {
    fontSize: 16,
  }
});

export default MovieDetails;

