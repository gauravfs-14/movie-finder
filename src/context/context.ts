import React, { createContext } from "react";

interface SearchContextType {
    searchQuery: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

