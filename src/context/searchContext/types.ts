import {ReactNode} from 'react';
export interface ISearchContextProps {
  children: ReactNode;
}
export interface ISearchContextType {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}
