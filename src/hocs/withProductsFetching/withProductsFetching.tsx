import React, {useContext, useCallback, useState, FC} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Indicator from '../../components/indicator/Indicator';
import ProductCard from './components/productCard/ProductCard';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import NoResults from '../../components/noResults/NoResults';
import {getProducts} from '../../utilities/getProducts';
import {IProduct} from '../../types/productTypes';
import {IRenderItemProps} from './types';
import styles from './withProductsFetching.styles';
import {SearchContext} from '../../context/searchContext/SearchContext';

export const withProductsFetching = (
  WrappedComponent: React.ComponentType<any>,
  category: string = '',
) => {
  return (props: any) => {
    const {searchTerm} = useContext(SearchContext);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [refreshing, setRefreshing] = useState<boolean>(true);
    useFocusEffect(
      useCallback(() => {
        let isActive = true;
        if (isActive) {
          getProductsHandler();
        }
        return () => {
          // clean up
          isActive = false;
        };
      }, [searchTerm]),
    );
    const getProductsHandler = () => {
      getProducts(category, searchTerm)
        .then(res => {
          setProducts(res);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
          setRefreshing(false);
        });
    };
    const renderItem: FC<IRenderItemProps> = ({item}) => (
      <ProductCard product={item} navigation={props.navigation} />
    );
    if (loading) {
      return <Indicator />;
    }
    if (error) {
      return <ErrorMessage />;
    }
    if (products.length === 0) {
      return <NoResults />;
    }
    return (
      <WrappedComponent {...props}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          style={styles.container}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={getProductsHandler}
            />
          }
        />
      </WrappedComponent>
    );
  };
};
