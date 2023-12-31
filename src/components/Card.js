import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const Card = ({ item }) => {                                                                     
  const handleCardPress = () => {
    console.log("Card pressed");                                                                                   
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
    width: 350,
    height: 120,
    borderRadius: 12, 
    backgroundColor: "#ffffff",
    marginTop: 15,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: "#DEDEDE",
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    height: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  overview: {
    overflow: "hidden",
  }
});

export default Card;
