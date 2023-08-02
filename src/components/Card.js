import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Card = ({movie}) => {
  console.log(movie)
  const navigation = useNavigation();
  const handleCardPress = () => {
    navigation.navigate('MovieDetails', { movieId: movie });
  }
  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.flexContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movie}`,
          }}
          style={styles.cardContainer}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 300,
    width: 200,
    borderRadius: 8,
    marginTop: 20
  },
  flexContainer: {
    alignItems: "center"
  }
});

export default Card;
