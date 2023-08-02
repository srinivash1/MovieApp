import {View, Dimensions, Text, Button} from 'react-native';
import React from 'react';
import useFetchMovie from '../utils/useFetchMovie';
import Card from '../components/Card';
import Carousel from 'react-native-snap-carousel';
import {StyleSheet} from 'react-native';

const CarouselPopularMovie = () => {
  const {movieData} = useFetchMovie();
  return (
    <View>
      <View style={styles.flexContainer}>
        <View>
          <Text style={styles.trendingTextStyles}>Trending</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title={`Movies (${movieData.length})`} />
        </View>
      </View>
      <Text>jbasd</Text>

      {/* <Carousel
        data={movieData}
        renderItem={({item}) => <Card movie={item} />} // Render each item as a Card component
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width - 200}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  trendingTextStyles: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  flexContainer: {
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  buttonContainer: {
    width: 100
  }
});

export default CarouselPopularMovie;



