import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SideBar = () => {
  const list = ['Movies', 'Popular', 'Trending', 'Upcoming'];
  return (
    <View>
      <Text>
        {list.map(data => {
          return (
            <Text>
              <Text>{data}</Text>
            </Text>
          );
        })}
      </Text>
    </View>
  );
};

export default SideBar;

const styles = StyleSheet.create({});
