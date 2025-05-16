import React, { Fragment, useState, useEffect } from 'react';
import { useBookHook } from './customhooks/CustomHooks';
import { useLoggerHook } from './customhooks/CustomHooks';

const BookList = () => {
    const { books, addBooks, removeBook } = useBookHook();
    const { logs, addLogs } = useLoggerHook();
    const [title, setTitle] = useState();
    const [author,setAuthor] = useState();

    const handleAdd = () => {
        if (!title || !author) return;
        addBooks(title, author);
        addLogs(`Added book: ${title}`);
        setTitle('');
        setAuthor('');
      };

      useEffect(() => {
        addLogs('BookList component mounted');
      }, []);

    return (

        <div className='container'>
            <h2>Book List</h2>
            <ul>
                {books.map(book => (
                    <li id={book.id}> {book.title}- {book.author}
                        <button onClick={() => {
                            removeBook(book.id);
                            addLogs(`Removed Book : ${book.title}`)
                        }}>Remove</button>
                    </li>)
                )}

            </ul>
            <h3>Add Book</h3>
            <input value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <input value={author} onChange={(e)=>setAuthor(e.target.value)}></input>
            <button onClick={handleAdd}>Add</button>

            <h3>Logs</h3>
      <ul>
        {logs?.map((entry, idx) => <li key={idx}>{entry}</li>)}
      </ul>
        </div>

    );
}

export default BookList;