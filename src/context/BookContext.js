import React, {createContext,useState} from 'react';

export const BookContext = createContext();

export const BookProvider = ({children}) => {
    const [books, setBooks] = useState([{id:1,title:'Perfect Divorce',author:'Jeneva Rose'}]);

    const addBooks = (title, author) => {
        const newBook = {id: Date.now(), title, author}
        setBooks(prev => ([...prev,newBook]));
    }

    const removeBook = (id) => {
        setBooks(prev=> prev.filter(book=> book.id != id))
    }

    return(
        <BookContext.Provider value={{ books,addBooks,removeBook}}>
            {children}
        </BookContext.Provider>
    )
}