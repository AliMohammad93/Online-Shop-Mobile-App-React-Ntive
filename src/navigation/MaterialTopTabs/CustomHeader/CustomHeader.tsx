import React, { useContext } from 'react';
import { View, TextInput , Text} from 'react-native';
import { styles } from "./CustomHeader.styles";
import {SearchContext} from "../../../context/SearchContext";
const CustomHeader = () => {
  const {setSearchTerm } = useContext(SearchContext);
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome to</Text>
      <Text style={styles.title}>Shop Name</Text>
      <TextInput
        style={styles.searchBox}
        placeholder="Search..."
        onChangeText={text => setSearchTerm(text)}
      />
    </View>
  );
};



export default CustomHeader;
