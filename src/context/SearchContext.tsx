import React, { useState, createContext, ReactNode } from "react";

type SearchContextProps = {
  children: ReactNode
}
type SearchContextType = {
  searchTerm: string,
  setSearchTerm: (value: string) => void
}
export const SearchContext = createContext<SearchContextType>({
  searchTerm: "",
  setSearchTerm: () => {}
});
export const SearchContextProvider = ({ children }: SearchContextProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>{children}</SearchContext.Provider>;
};
