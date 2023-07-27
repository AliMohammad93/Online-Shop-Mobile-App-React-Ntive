import React, { useContext, useCallback, useState } from "react";
import Indicator from "../components/indicator/Indicator";
import { SearchContext } from "../context/SearchContext";
import { Text } from "react-native";
import { getProducts } from "../utilities/getProducts";
import { IProduct } from "../types/productTypes";
import { useFocusEffect } from "@react-navigation/native";

export const withProductsFetching = (WrappedComponent: React.ComponentType<any>, category: string | null = null) => {
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
      let url = "https://fakestoreapi.com/products";
      if (category) {
        url = `https://fakestoreapi.com/products/category/${category}`;
      }
      getProducts(url, searchTerm).then(res => {
        setProducts(res);
        console.log(res);
      }).catch(e => {
        if (__DEV__) {
          console.log(e);
        }
        setError(true);
      }).finally(() => {
        setLoading(false);
        setRefreshing(false);
      });
    };

    if (error) return <Text>Something went wrong </Text>;
    if (loading) return <Indicator />;
    if (products.length === 0) return <Text>No result</Text>;
    return (
      <WrappedComponent products={products} refreshing={refreshing} getProducts={getProductsHandler} {...props} />
    );
  };
};
