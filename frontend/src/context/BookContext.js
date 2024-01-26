// BookContext.js
import React, { createContext, useContext, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const updateBooks = (newBooks) => {
    console.log('Updating books:', newBooks);
    if (JSON.stringify(newBooks) !== JSON.stringify(books)) {
        setBooks(newBooks);
      }
    };

  return (
    <BookContext.Provider value={{ books, updateBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  return useContext(BookContext);
};
