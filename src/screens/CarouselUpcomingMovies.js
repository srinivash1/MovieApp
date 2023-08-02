import { View, Dimensions, Text, Button, FlatList  } from 'react-native'
import React from 'react';
import useFetchUpcomingMovie from '../utils/useFetchUpcomingMovie';
import { StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Card from '../components/Card';

const CarouselUpcomingMovies = () => {
    const {popularMovies} = useFetchUpcomingMovie();
   console.log(popularMovies)
  return (
    <View style={styles.container}>
     <View style={styles.flexContainer}>
        <View>
          <Text style={styles.trendingTextStyles}>Upcoming</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title={`Movies (${popularMovies.length})`} />
        </View>
      </View>
      <View>
        <FlatList 
          data={popularMovies}
          renderItem={({item}) => <Card movie={item.poster_path} />}
        />
      </View>
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
    },
    flexContainer: {
      marginTop: 20,
      justifyContent: "space-between",
      flexDirection: "row"
    },
    buttonContainer: {
      width: 100
    }
})


export default CarouselUpcomingMovies