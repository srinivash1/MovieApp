import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MovieDetails = () => {
  const route = useRoute();
  const { id } = route.params;
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/find/864221');
      console.log(response)
    } catch (error) {
      
    }
  }
  useEffect(() => {
    fetchData()
  },[])
  return (
    <View style={styles.container}>
      {/* <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${id.backdrop_path}`,
        }}
        style={styles.cardContainer}
        resizeMode="cover"
        overlayColor="rgba(10, 0, 0, 2.5)" 
      /> */}
      <View>
        <Text style={styles.titleContainer}>
            {id.original_title}
        </Text>
        <Text style={styles.movieOverView}>
            {id.overview}
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

