import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const Card = ({ item }) => {                                                                     
  const handleCardPress = () => {
                                                                                            
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item.original_title}</Text>
          <Text>{item.release_date}</Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.overview}>{item.overview}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 384,
    width: 304,
    borderRadius: 12, 
    backgroundColor: "#ffffff",
    marginTop: 20,
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 256,
    height: 173,
    borderRadius: 12,
    backgroundColor: "#DEDEDE",
  },
  detailsContainer: {
    width: 256,
    height: 81,
    marginTop: 20,
    padding: 20
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  overview: {
    overflow: "hidden"
  }
});

export default Card;
