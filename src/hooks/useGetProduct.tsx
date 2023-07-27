import { useEffect, useState } from "react";
import { IProduct } from "../types/productTypes";

export const useGetProduct = (id: number): [IProduct | undefined, boolean, any] => {
  const [data, setData] = useState<IProduct | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(product => {
        setData(product);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return [data, loading, error];
};
