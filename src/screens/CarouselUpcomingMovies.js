import React, { useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, TextInput } from 'react-native';
import useFetchUpcomingMovie from '../utils/useFetchUpcomingMovie';
import { StyleSheet } from 'react-native';
import Card from '../components/Card';

const CarouselUpcomingMovies = () => {
  const [search, setSearch] = useState(''); // Local state for the search
  const { popularMovies, loading } = useFetchUpcomingMovie(search); // Pass the search state to the custom hook

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <TextInput
          value={search}
          autoCorrect={false}
          onChangeText={setSearch} // Use onChangeText to update the search state in the component
          placeholder='Movie Name'
          style={styles.textInput}
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="green" style={styles.loadingIndicator} />
      ) : (
        <>
          <Text style={styles.textContainer}>Matching Movies Found - {popularMovies.length}</Text>
          <View style={styles.centeredContainer}>
            <FlatList
              data={popularMovies}
              renderItem={({ item }) => <Card item={item} key={item.id} />}
              horizontal={false} // Set FlatList to render items horizontally
              contentContainerStyle={styles.centeredContent} // Center the content of FlatList horizontally
            />
          </View>
        </>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  
  },
  textStyles: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold"
  },
  flexContainer: {
    marginTop: 20,
    borderRadius: 5,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    paddingVertical: 5,
    margin: 19
  },
  textInput: {
    width: '40%',
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: 100
  },
  textContainer: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  centeredContent: {
    alignItems: 'center', // Center the items horizontally
  },
});

export default CarouselUpcomingMovies;
