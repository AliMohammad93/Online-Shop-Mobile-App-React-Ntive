import React, { useContext } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import {SearchContext} from "../../context/SearchContext";

const CustomHeader = () => {
  const {searchTerm , setSearchTerm } = useContext(SearchContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{searchTerm}</Text>
      <TextInput
        style={styles.searchBox}
        placeholder="Search..."
        onChangeText={text => setSearchTerm(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    width: '60%',
  },
});

export default CustomHeader;
