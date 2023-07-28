import React, { useContext, useCallback, useState , FC } from "react";
import { Text, FlatList, RefreshControl , Dimensions} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Indicator from "../../components/indicator/Indicator";
import ProductCard from "../../components/productCard/ProductCard";
import { getProducts } from "../../utilities/getProducts";
import { IProduct } from "../../types/productTypes";
import {IRenderItemProps} from "./types";
import { SearchContext } from "../../context/SearchContext";
import styles from "./withProductsFetching.styles";
const windowWidth = Dimensions.get('window').width;

export const withProductsFetching = (WrappedComponent: React.ComponentType<any>, category: string = '') => {
  return (props: any) => {
    const { searchTerm } = useContext(SearchContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [refreshing, setRefreshing] = useState(true);
    useFocusEffect(
      useCallback(() => {
        getProductsHandler();
      }, [searchTerm])
    );
    const getProductsHandler = () => {
      getProducts(category, searchTerm).then(res => {
        setProducts(res);
      }).catch(e => {
        setError(true);
      }).finally(() => {
        setLoading(false);
        setRefreshing(false);
      });
    };
    const renderItem : FC <IRenderItemProps> = ({ item }) => (
      <ProductCard product={item} navigation={props.navigation} />
    );
    if (error) return <Text>Something went wrong </Text>;
    if (loading) return <Indicator />;
    if (products.length === 0) return <Text>No result</Text>;
    return (
      <WrappedComponent {...props}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          style={styles.container}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={getProductsHandler}/>}
        />
      </WrappedComponent>
    );
  };
};
