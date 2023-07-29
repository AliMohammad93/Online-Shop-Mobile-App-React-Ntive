import React, {useState, createContext} from 'react';
import {ISearchContextProps, ISearchContextType} from './types';
export const SearchContext = createContext<ISearchContextType>({
  searchTerm: '',
  setSearchTerm: () => {},
});
export const SearchContextProvider = ({children}: ISearchContextProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  return (
    <SearchContext.Provider value={{searchTerm, setSearchTerm}}>
      {children}
    </SearchContext.Provider>
  );
};
