import { View, Text, Dimensions } from 'react-native'
import React from 'react';
import useFetchTopRatedMovies from '../utils/useFetchTopRatedMovies';
import { StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Card from '../components/Card';

const CarouselTopRatedMovie = () => {
    const {movieData} = useFetchTopRatedMovies();
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Upcoming Movies</Text>
      <Carousel 
        data={movieData}
        renderItem={({item}) => <Card movie={item}/>}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width-180}

      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    textStyles: {
        fontSize: 20,
        color: "green",
        fontWeight: "bold"
    }
})


export default CarouselTopRatedMovie