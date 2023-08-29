import React, {useContext} from 'react';
import {View, TextInput, Text} from 'react-native';
import {styles} from './CustomHeader.styles';
import {SearchContext} from '../../../context/searchContext/SearchContext';
const CustomHeader = () => {
  const {setSearchTerm} = useContext(SearchContext);
  const handleSearchChange = (text: string) => {
    if (text.trim().length > 2) {
      setSearchTerm(text);
    } else {
      setSearchTerm('');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome to</Text>
      <Text style={styles.title}>Online Store</Text>
      <TextInput
        style={styles.searchBox}
        placeholder="Search..."
        onChangeText={text => handleSearchChange(text)}
      />
    </View>
  );
};

export default CustomHeader;
