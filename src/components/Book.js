import React from "react";
import{useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addNewBook, deleteLastAddedBook } from "../reducers/add-book-slice";

export function Book() {
const history = useHistory();
  const books = useSelector((state) => state.books);
  console.log(books)
  const dispatch = useDispatch();
  return (
    <div>
      Books listings are : -
      <div>
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
      </div>
      <button
        aria-label="addNewBook"
        onClick={() => dispatch(addNewBook())}
      >
        addNewBook
      </button>
      <button
        aria-label="deleteLastAddedBook"
        onClick={() => dispatch(deleteLastAddedBook())}
      >
        deleteLastAddedBook
      </button>
      <button
        aria-label="gotobookList"
        onClick={() => {history.push('/books')}}
      >
        gotobookList
      </button>
    </div>
  );
}

export default Book;
