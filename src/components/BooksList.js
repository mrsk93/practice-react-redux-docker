import React from 'react'
import { useSelector } from 'react-redux'
import{useHistory} from "react-router-dom";


export function BooksList() {
    const history = useHistory();
    const books = useSelector(state => state.books)
    return (
        <>
        {books.map((book) => {
            return (
              <React.Fragment key={book.createdAt}>
                <span>{book.name}</span> - 
                <span>{book.author}</span> - 
                <span>{book.publisher}</span> - 
                <span>{book.pages}</span> - 
                <span>{book.createdAt}</span> - 
              </React.Fragment>
            );
          })}
                <button
        aria-label="Add book"
        onClick={() => {history.push('/')}}
      >
        Add book
      </button>
          </>
    )
}

export default BooksList
