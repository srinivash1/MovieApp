import { Image, Text, View, TouchableOpacity } from 'react-native';
import React,{ useState } from 'react';
import { StyleSheet } from 'react-native';
import CarouselPopularMovie from './CarouselPopularMovie';
import CarouselUpcomingMovies from './CarouselUpcomingMovies';
import SideBar from './SideBar';

const HomeScreen = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleHamburgerIconPress = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <View style={styles.backGroundContainer}>
        <View style={styles.container}>
          <View style={styles.leftSection}>

            <TouchableOpacity onPress={handleHamburgerIconPress}>
              <Image
                style={styles.hamburgerIcon}
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png",
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.middleSection}>
            <Text>Movies</Text>
          </View>
          <View style={styles.rightSection}>
            {/* Search For movies */}
            <Text>Search</Text>
          </View>
        </View>
      </View>
      
      {/* <View>
        <CarouselPopularMovie />
      </View> */}
      <View>
        <CarouselUpcomingMovies />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    color: 'white',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hamburgerIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  middleSection: {
    flex: 1,
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backGroundContainer: {
    backgroundColor: 'gray',
  },
});

export default HomeScreen;
